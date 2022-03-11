import { watchEffect } from 'vue'
import { rowLens, colLens, regLens } from 'core/optics'
import { Board, Cell } from 'core/types'
import { lengthIs, lensEq } from 'fns'
import { filter, head, map } from 'fp-ts/Array'
import { constant, constFalse, constVoid as onNone, flow } from 'fp-ts/function'
import { Eq as nEq } from 'fp-ts/number'
import { fold, getOrElse } from 'fp-ts/Option'
import { Predicate } from 'fp-ts/Predicate'
import { Lens } from 'monocle-ts'
import { useStore } from '~/store'

export const useAutoSolve = (): void => {
  const store = useStore()

  type DispatchAutoSolve = (cell: Cell) => void
  const dispatchAutoSolve: DispatchAutoSolve = ({ ind }) =>
    store.autoSolve({ ind, value: store.numberSelected })

  type IsSingleton = (lens: Lens<Cell, number>, i: number) => boolean
  const isSingleton: IsSingleton = (lens, i) => {
    const onTrue = flow(filter(lensEq(lens, i)(nEq)), lengthIs(1))
    return fold(constFalse, onTrue)(store.selection)
  }

  const canSolve: Predicate<Cell> = ({ row, col, reg }) =>
    isSingleton(rowLens, row) ||
    isSingleton(colLens, col) ||
    isSingleton(regLens, reg)

  //When number is selected check if any selected can autoSolve
  watchEffect(() => {
    if (!!store.numberSelected && store.toggles.autoSolve) {
      type OnSome = (selection: Board) => void
      const onSome: OnSome = flow(filter(canSolve), map(dispatchAutoSolve))
      fold(onNone, onSome)(store.selection)
    }
  })

  //When there is only one selected try to autoSolve
  watchEffect(() => {
    if (store.toggles.autoSolve) {
      const singlePossible = lengthIs(1)(store.availables.cell)
      const onSome = (selection: Board) => {
        const [{ ind }] = selection
        const value = getOrElse(constant(0))(head(store.availables.cell))
        store.autoSolve({ ind, value })
      }
      if (singlePossible) fold(onNone, onSome)(store.selection)
    }
  })
}

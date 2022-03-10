import { defineStore } from 'pinia'
import {
  autoSolve,
  clearBoard,
  clearSelection,
  lockBoard,
  numberSelect,
  puzzleToBoard,
  resetBoard,
  selectAll,
  selectCell,
  updateBig,
  updateSmall
} from 'core'
import { getAvailableValues, getSelectedOption } from 'core/selectors'
import { Board, Cell, Puzzle, Smalls, State, Toggles } from 'core/types'
import { pipe } from 'fp-ts/function'
import { Lens } from 'monocle-ts'

const testPuzzle = [
  [0, 3, 9, 0, 7, 0, 2, 5, 1],
  [7, 0, 0, 1, 2, 0, 0, 3, 0],
  [0, 1, 5, 0, 9, 3, 0, 0, 7],
  [0, 0, 2, 0, 0, 1, 0, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 0, 4, 0, 0, 6, 0, 0],
  [4, 0, 0, 3, 6, 0, 1, 9, 0],
  [0, 9, 0, 0, 4, 7, 0, 0, 6],
  [3, 6, 8, 0, 1, 0, 7, 2, 0]
]

const init: State = {
  board: puzzleToBoard(testPuzzle),
  numberSelected: 0,
  toggles: { autoSolve: false, mouseDown: false, mouseOutside: false }
}

export const useStore = defineStore('store', {
  state: () => init,
  getters: {
    availables: state => getAvailableValues(state.board),
    selection: state => getSelectedOption(state.board)
  },
  actions: {
    // set
    setBoard(board: Board) {
      this.board = board
    },

    setPuzzle(puzzle: Puzzle) {
      pipe(puzzle, puzzleToBoard, this.setBoard)
    },

    setNumberSelected(value: number) {
      this.numberSelected = value
    },

    setToggle({
      lens,
      value
    }: {
      lens: Lens<Toggles, boolean>
      value: boolean
    }) {
      this.toggles = lens.set(value)(this.toggles)
    },

    //clear
    clearBoard() {
      this.setBoard(clearBoard)
    },

    clearNumberSelected() {
      this.numberSelected = 0
    },

    // mutate
    autoSolve(payload: { ind: number; value: number }) {
      pipe(autoSolve(this.board, payload), this.setBoard)
    },

    clearSelection() {
      this.clearNumberSelected()
      pipe(this.board, clearSelection, this.setBoard)
    },

    lockBoard() {
      pipe(this.board, lockBoard, this.setBoard)
    },

    resetBoard() {
      pipe(this.board, resetBoard, this.setBoard)
    },

    numberSelect(value: number) {
      this.setNumberSelected(value)
      pipe(numberSelect(this.board, { value }), this.setBoard)
    },

    selectCell(payload: { ind: number; shouldClear: boolean }) {
      this.clearNumberSelected()
      pipe(selectCell(this.board, payload), this.setBoard)
    },

    selectAll() {
      pipe(this.board, selectAll, this.setBoard)
    },

    toggle(lens: Lens<Toggles, boolean>) {
      this.setToggle({ lens, value: !lens.get(this.toggles) })
    },

    updateBig(payload: { value: number }) {
      pipe(updateBig(this.board, payload), this.setBoard)
    },

    updateSmall(payload: { lens: Lens<Cell, Smalls>; value: number }) {
      pipe(updateSmall(this.board, payload), this.setBoard)
    }
  }
})

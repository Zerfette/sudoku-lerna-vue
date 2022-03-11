import { onMounted, onUnmounted } from 'vue'
import { cornerLens, middleLens, mouseDownLens } from 'core/optics'
import { elem } from 'fp-ts/Array'
import { range } from 'fp-ts/NonEmptyArray'
import { Eq as nEq } from 'fp-ts/number'
import { fold, isSome } from 'fp-ts/Option'
import { Predicate } from 'fp-ts/Predicate'
import { useStore } from '~/store'

const isValue: Predicate<string> = x => elem(nEq)(+x)(range(0, 9))

export const useModel = () => {
  const store = useStore()

  const onKeyDown = (ev: KeyboardEvent) => {
    const { key, altKey, ctrlKey } = ev
    ev.stopPropagation()
    if (key !== 'F12') ev.preventDefault()
    if (isValue(key)) {
      const value = +key
      const onNone = () => store.numberSelect(value)
      const onSome = () => {
        if (!altKey && !ctrlKey) store.updateBig({ value })
        if (ctrlKey) store.updateSmall({ lens: cornerLens, value })
        if (altKey) store.updateSmall({ lens: middleLens, value })
      }
      fold(onNone, onSome)(store.selection)
    } else {
      if (key === 'Enter') store.clearSelection()
      if (key === 'Delete' || key === 'Backspace') store.updateBig({ value: 0 })
      if (ctrlKey && key === 'a') store.selectAll()
    }
  }
  onMounted(() => document.addEventListener('keydown', onKeyDown))
  onUnmounted(() => document.removeEventListener('keydown', onKeyDown))

  return <const>{
    onMouseDown: () => {
      store.setToggle({ lens: mouseDownLens, value: true })
      if (store.toggles.mouseOutside && isSome(store.selection))
        store.clearSelection()
    },
    onMouseUp: () => store.setToggle({ lens: mouseDownLens, value: false }),
  }
}

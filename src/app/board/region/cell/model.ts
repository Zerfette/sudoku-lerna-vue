import { computed, toRefs } from 'vue'
import { useStore } from '~/store'

export const useModel = ({ i }: { i: number }) => {
  const store = useStore()
  const cell = computed(() => store.board[i])
  const { value, ind, locked } = toRefs(cell.value)

  return <const>{
    cell,
    onMouseEnter: () => {
      store.toggles.mouseDown &&
        !locked.value &&
        store.selectCell({ ind: ind.value, shouldClear: false })
    },

    onMouseDown: ({ ctrlKey }: globalThis.MouseEvent) => {
      locked.value
        ? store.numberSelect(value.value)
        : store.selectCell({ ind: ind.value, shouldClear: !ctrlKey })
    }
  }
}

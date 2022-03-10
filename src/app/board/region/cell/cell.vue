<script setup lang="ts">
import { computed, Ref, toRefs } from 'vue'
import { isNonZero } from 'fns'
import { useStore } from '~/store'
import { style } from './style'

const store = useStore()
const props = defineProps({ i: Number })
const { i } = toRefs(props) as { i: Ref<number> }
const cell = computed(() => store.board[i.value])
const { value, ind, locked } = toRefs(cell.value)

const onMouseEnter = () =>
  store.toggles.mouseDown &&
  !locked.value &&
  store.selectCell({ ind: ind.value, shouldClear: false })

const onMouseDown = ({ ctrlKey }: globalThis.MouseEvent) => {
  locked.value
    ? store.numberSelect(value.value)
    : store.selectCell({ ind: ind.value, shouldClear: !ctrlKey })
}
</script>

<template>
  <div :style="style(cell)" @mouseenter="onMouseEnter" @mousedown="onMouseDown">
    <p v-show="isNonZero(cell.value)">{{ cell.value }}</p>
  </div>
</template>

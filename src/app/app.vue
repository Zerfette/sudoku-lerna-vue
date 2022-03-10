<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { cornerLens, middleLens, mouseDownLens } from 'core/optics'
import { fold, isSome } from 'fp-ts/Option'
import { toggleColorMode } from '~/colorMode'
import { useStore } from '~/store'
import Board from './board/board.vue'
import { style } from './style'
import { isValue } from './model'

const store = useStore()

const onMouseDown = () => {
  store.setToggle({ lens: mouseDownLens, value: true })
  if (store.toggles.mouseOutside && isSome(store.selection))
    store.clearSelection()
}
const onMouseUp = () => store.setToggle({ lens: mouseDownLens, value: false })

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
onMounted(() => window.addEventListener('keydown', onKeyDown))
onUnmounted(() => window.removeEventListener('keydown', onKeyDown))
</script>

<template>
  <div :style="style" @mousedown="onMouseDown" @mouseup="onMouseUp">
    <Board />
    <button @click="toggleColorMode">color mode</button>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script setup lang="ts">
import Availables from './availables/availables.vue'
import Board from './board/board.vue'
import Controls from './controls/controls.vue'
import { style } from './style'
import { useModel } from './model'
import { useAutoSolve } from './autoSolve'

useAutoSolve()
const { onMouseDown, onMouseUp } = useModel()
</script>

<template>
  <div :style="style" @mousedown="onMouseDown" @mouseup="onMouseUp">
    <Controls />
    <Board />
    <Availables/>
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

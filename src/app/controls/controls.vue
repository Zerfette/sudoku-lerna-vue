<script setup lang="ts">
import { AutoSolve, ColorMode, Edit, Help, Reset, Timer } from './components'
import { useStopwatch } from './stopwatch'
import { style } from './style'

const stopwatch = useStopwatch()
</script>

<template>
  <div :style="style.root">
    <Timer :stopwatch="stopwatch" />
    <div :style="style.buttonRow">
      <Reset />
      <Edit />
      <AutoSolve />
      <ColorMode />
      <Help />
    </div>
  </div>
</template>

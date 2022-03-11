<script setup lang="ts">
import { CSSProperties } from 'vue'
import { space } from 'theme'
import {
  // AutoSolve,
  // ColorModeButton,
  // Edit,
  // Help,
  // StartOver,
  Timer
} from './components'
import { size } from '../board/style'
import { useStopwatch } from './stopwatch'

const root: CSSProperties = {
  display: 'flex',
  width: size,
  'justify-content': 'space-between'
}

const buttonRow: CSSProperties = {
  margin: space[1],
  display: 'flex'
}

const stopwatch = useStopwatch()
</script>

<template>
  <div :style="root">
    <Timer :stopwatch="stopwatch" />
    <div :style="buttonRow"></div>
  </div>
</template>

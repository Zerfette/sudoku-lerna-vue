<script setup lang="ts">
import { PropType } from 'vue'
import { getTimerText } from 'core'
import { Stopwatch } from '../../stopwatch'
import { getStyle } from './style'

defineProps({
  stopwatch: {
    type: Object as PropType<Stopwatch>,
    required: true
  }
})
const { button, root, paragraph } = getStyle()
</script>

<template>
  <div :style="root">
    <p :style="paragraph">{{ getTimerText(stopwatch.elapsedTime.value) }}</p>
    <div :style="button" @click="stopwatch.toggleTimer">t</div>
    <div :style="button" @click="stopwatch.resetTimer">r</div>
  </div>
</template>

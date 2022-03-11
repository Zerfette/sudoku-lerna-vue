<script setup lang="ts">
import { PropType } from 'vue'
import { getTimerText } from 'core/stopwatch'
import { Stopwatch } from '../../stopwatch'
import { getStyle } from './style'

defineProps({
  stopwatch: {
    type: Object as PropType<Stopwatch>,
    required: true
  }
})
const style = getStyle()
</script>

<template>
  <div :style="style.root">
    <p :style="style.paragraph">
      {{ getTimerText(stopwatch.elapsedTime.value) }}
    </p>
    <div :style="style.button" @click="stopwatch.toggleTimer">
      <font-awesome-icon :icon="stopwatch.isRunning.value ? 'pause' : 'play'" />
    </div>
    <div :style="style.button" @click="stopwatch.resetTimer">
      <font-awesome-icon icon="undo-alt" />
    </div>
  </div>
</template>

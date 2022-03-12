<script setup lang="ts">
import { PropType } from 'vue'
import { useStyle } from './style'

defineProps({
  i: {
    type: Number,
    required: true
  },
  availables: {
    type: Array as PropType<Array<number>>,
    required: true
  }
})
const style = useStyle()
</script>
<template>
  <div :style="availables.includes(i) ? style.on : style.off">{{ i }}</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { range } from 'fp-ts/NonEmptyArray'
import Number from './number/number.vue'

defineProps({
  availables: {
    type: Array as PropType<Array<number>>,
    required: true
  }
})
</script>
<template>
  <div :style="{ display: 'flex', 'justify-content': 'center', 'align-items': 'center', margin: 0 }">
    <Number v-for="n in range(1, 9)" :i="n" :key="n" :availables="availables"/>
  </div>
</template>

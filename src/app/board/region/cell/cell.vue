<script setup lang="ts">
import { isNonZero } from 'fns'
import { style } from './style'
import { useModel } from './model'

const props = defineProps({
  i: {
    type: Number,
    required: true
  }
})
const { cell, onMouseEnter, onMouseDown } = useModel(props)
</script>

<template>
  <div :style="style(cell)" @mouseenter="onMouseEnter" @mousedown="onMouseDown">
    <p v-show="isNonZero(cell.value)">{{ cell.value }}</p>
  </div>
</template>

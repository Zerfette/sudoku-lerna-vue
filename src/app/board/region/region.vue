<script setup lang="ts">
import { PropType } from 'vue'
import Cell from './cell/cell.vue'
import { style } from './style'

defineProps({ region: Array as PropType<Array<number>> })
</script>

<template>
  <div :style="style">
    <Cell v-for="i in region" :i="i" :key="i" />
  </div>
</template>

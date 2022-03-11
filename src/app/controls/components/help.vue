<script setup lang="ts">
import { useStyle } from './style'

const style = useStyle()
const onClick = () => {}
</script>

<template>
  <div :style="style.off" @click="onClick">
    <font-awesome-icon icon="question" />
  </div>
</template>

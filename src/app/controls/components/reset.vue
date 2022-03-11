<script setup lang="ts">
import { useStore } from '~/store'
import { useStyle } from './style'

const store = useStore()
const style = useStyle()
const onClick = () => store.resetBoard()
</script>

<template>
  <div :style="style.off" @click="onClick">
    <font-awesome-icon icon="sync-alt" />
  </div>
</template>

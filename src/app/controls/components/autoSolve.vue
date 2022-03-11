<script setup lang="ts">
import { autoSolveLens } from 'core/optics'
import { useStore } from '~/store'
import { useStyle } from './style'
const store = useStore()
const style = useStyle()
const onClick = () => store.toggle(autoSolveLens)
</script>

<template>
  <div :style="store.toggles.autoSolve ? style.on : style.off" @click="onClick">
    <font-awesome-icon icon="wand-magic-sparkles" />
  </div>
</template>

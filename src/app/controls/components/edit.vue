<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '~/store'
import { useStyle } from './style'

const store = useStore()
const style = useStyle()
const locked = ref(true)
const onClick = () => {
  locked.value ? store.clearBoard() : store.lockBoard()
  locked.value = !locked.value
}
</script>

<template>
  <div :style="style.off" @click="onClick">
    <font-awesome-icon :icon="locked ? 'plus' : 'lock'" />
  </div>
</template>

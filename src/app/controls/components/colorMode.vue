<script setup lang="ts">
import { assertions, toggleColorMode } from '~/colorMode'
import { useStyle } from './style'

const style = useStyle()
</script>

<template>
  <div :style="style.off" @click="toggleColorMode">
    <font-awesome-icon :icon="assertions.isDarkMode ? 'sun' : 'moon'" />
  </div>
</template>

<script setup lang="ts">
import { toggleColorMode } from '~/colorMode';
import Board from './board/index.vue'
import {style} from './style'
</script>

<template>
  <div :style="style">
    <Board />
    <button @click="toggleColorMode">color mode</button>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

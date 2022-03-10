<script setup lang="ts">
import {useStore} from '../store'
const msg = 'HELLO WORLD'
const store = useStore()
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="store.setNumberSelected(4)">4</button>
    <button @click="store.setNumberSelected(6)">6</button>
    <h1>{{ store.numberSelected }}</h1>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script setup lang="ts">
import Region from './region/region.vue'
import { regionIndicies } from './model'
import { style } from './style'
</script>

<template>
  <div :style="style">
    <Region v-for="(region, i) in regionIndicies" :region="region" :key="i" />
  </div>
</template>

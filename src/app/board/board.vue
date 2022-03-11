<script setup lang="ts">
import Region from './region/region.vue'
import { useModel, regionIndicies } from './model'
import { style } from './style'

const { onMouseOver, onMouseOut } = useModel()
</script>

<template>
  <div :style="style" @mouseover="onMouseOver" @mouseout="onMouseOut">
    <Region v-for="(region, i) in regionIndicies" :region="region" :key="i" />
  </div>
</template>

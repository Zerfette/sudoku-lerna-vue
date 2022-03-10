<script setup lang="ts">
import { mouseOutsideLens } from 'core/optics'
import { useStore } from '~/store'
import Region from './region/region.vue'
import { regionIndicies } from './model'
import { style } from './style'

const store = useStore()
const onMouseOver = () =>
  store.setToggle({ lens: mouseOutsideLens, value: false })

const onMouseOut = () =>
  store.setToggle({ lens: mouseOutsideLens, value: true })
</script>

<template>
  <div :style="style" @mouseover="onMouseOver" @mouseout="onMouseOut">
    <Region v-for="(region, i) in regionIndicies" :region="region" :key="i" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { fontSizes } from 'theme'
import { useStore } from '~/store'
import { isNonEmpty } from 'fp-ts/Array'
import { fold } from 'fp-ts/Option'
import { useStyle } from './style'
import Row from './row/row.vue'

const store = useStore()
const style = useStyle()
const onNone = () => 'Make a selection to get hints.'
const onSome = () => 'No valid hints. Make a new selection to get hints.'
const defaultText = computed(() => fold(onNone, onSome)(store.selection))
</script>
<template>
  <div :style="style">
    <p v-if="isNonEmpty(store.availables.cell)">
      <Row :availables="store.availables.cell" />
    </p>
    <p v-else-if="isNonEmpty(store.availables.row)">
      <Row :availables="store.availables.row" />
    </p>
    <p v-else-if="isNonEmpty(store.availables.col)">
      <Row :availables="store.availables.col" />
    </p>
    <p v-else-if="isNonEmpty(store.availables.reg)">
      <Row :availables="store.availables.reg" />
    </p>
    <p v-else :style="{ 'font-size': fontSizes.xl }">
      {{ defaultText }}
    </p>
  </div>
</template>

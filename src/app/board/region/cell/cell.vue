<script setup lang="ts">
import { computed, ComputedRef, Ref, toRefs } from 'vue'
import { Cell }from 'core/types'
import { useStore } from '~/store'
import { style } from './style'

const props = defineProps({ i: Number })
const { i } = toRefs(props) as {i: Ref<number>}
const store = useStore()
const cell = computed(() => store.board[i.value])
</script>

<template>
  <div :style="style(cell)">
    <p>{{cell.value}}</p>
  </div>
</template>

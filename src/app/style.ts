import { computed, ComputedRef, CSSProperties } from 'vue'
import { colors } from 'theme'
import { colorModeValue } from '~/colorMode'

export const style: ComputedRef<CSSProperties> = computed(() => ({
  'background-color': colorModeValue(colors.gray[200], colors.gray[900]).value,
  'min-height': '100vh',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'user-select': 'none'
}))

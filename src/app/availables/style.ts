import { computed, ComputedRef, CSSProperties } from 'vue'
import { colors, radii, space } from 'theme'
import { colorModeValue } from '~/colorMode'

export const useStyle = (): ComputedRef<CSSProperties> => {
  const color = colorModeValue(colors.black, colors.white)
  return computed(() => ({
    color: color.value,
    'border-radius': radii.sm,
    height: space['16'],
    'line-height': 1,
    'text-align': 'center',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center'
  }))
}

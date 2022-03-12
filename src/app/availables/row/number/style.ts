import { computed, ComputedRef, CSSProperties } from 'vue'
import { colors, fontSizes, radii, space } from 'theme'
import { colorModeValue } from '~/colorMode'

export const useStyle = (): ComputedRef<Record<string, CSSProperties>> => {
  const onBackground = colorModeValue(colors.purple[300], colors.purple[600])
  const onColor = colorModeValue(colors.black, colors.white)
  const offBackground = colorModeValue(colors.gray[100], colors.gray[600])
  const offColor = colorModeValue(colors.gray[300], colors.gray[700])
  const mixins = {
    width: space['8'],
    height: space['8'],
    'border-radius': radii.sm,
    'margin-right': space['2'],
    'font-size': fontSizes['xl'],
    'line-height': 1,
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center'
  }

  return computed(() => ({
    on: {
      background: onBackground.value,
      color: onColor.value,
      ...mixins
    },
    off: {
      background: offBackground.value,
      color: offColor.value,
      ...mixins
    }
  }))
}

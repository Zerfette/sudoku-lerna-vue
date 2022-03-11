import { computed } from 'vue'
import { colors, fontSizes, radii, space } from 'theme'
import { colorModeValue } from '~/colorMode'

export const useStyle = () => {
  const offBackground = colorModeValue(colors.gray[300], colors.gray[700])
  const onBackground = colorModeValue(colors.purple[700], colors.purple[300])
  const offColor = colorModeValue(colors.black, colors.white)
  const onColor = colorModeValue(colors.white, colors.black)
  const mixins = {
    height: space[10],
    width: space[10],
    'border-radius': radii.md,
    margin: space[1.5],
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    cursor: 'pointer',
    'font-size': fontSizes['xl']
  }
  return computed(() => ({
    off: {
      'background-color': offBackground.value,
      color: offColor.value,
      ...mixins
    },
    on: {
      'background-color': onBackground.value,
      color: onColor.value,
      ...mixins
    }
  }))
}

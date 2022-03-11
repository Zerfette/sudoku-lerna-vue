import { ComputedRef, computed, CSSProperties } from 'vue'
import { colors, fontSizes, lineHeights, radii, space } from 'theme'
import { colorModeValue } from '~/colorMode'

type GetStyle = () => ComputedRef<Record<string, CSSProperties>>
export const getStyle: GetStyle = () => {
  const background = colorModeValue(colors.gray[300], colors.gray[700])
  const color = colorModeValue(colors.black, colors.white)
  return computed(() => ({
    root: { display: 'flex', 'align-items': 'center' },
    paragraph: {
      'line-height': lineHeights.none,
      'font-size': fontSizes['4xl'],
      color: color.value,
      margin: '0',
      'margin-left': space['0.5'],
      'margin-bottom': space['1']
    },
    button: {
      cursor: 'pointer',
      'border-radius': radii.md,
      width: space['7'],
      height: space['7'],
      color: color.value,
      'background-color': background.value,
      'margin-left': space['2'],
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }
  }))
}

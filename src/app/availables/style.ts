import { computed, ComputedRef, CSSProperties } from 'vue'
import { colors, radii, space } from 'theme'
import { colorModeValue } from '~/colorMode'
import { size } from '../board/style'
import { margin } from '../board/region/cell/style'

export const useStyle = (): ComputedRef<CSSProperties> => {
  const bg = colorModeValue(colors.gray[300], colors.gray[700])
  const color = colorModeValue(colors.black, colors.white)
  return computed(() => ({
    // background: bg.value,
    color: color.value,
    'border-radius': radii.sm,
    height: space['16'],
    // width: `calc(${size} - 4*${margin})`,
    'line-height': 1,
    margin,
    'text-align': 'center'
  }))
}

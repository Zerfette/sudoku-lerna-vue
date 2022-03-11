import { CSSProperties } from 'vue'
import { noConflicts } from 'core'
import { Cell } from 'core/types'
import { colors, fontSizes, radii, space } from 'theme'
import { colorModeValue } from '~/colorMode'
import { useStore } from '~/store'

export const margin = space[0.5]
export const size = space[14]
const { black, cyan, purple, red, white } = colors

type Style = (cell: Cell) => CSSProperties
export const style: Style = cell => {
  const store = useStore()
  const { highlighted, locked, selected, value } = cell
  const valid: boolean = noConflicts(store.board, cell, value)
  const invalidColor = colorModeValue(red[200], red[700])
  const highlightedColor = colorModeValue(cyan[200], cyan[700])
  const selectedColor = colorModeValue(purple[400], purple[600])
  const dflt = colorModeValue(purple[200], purple[800])
  const color = colorModeValue(black, white)

  return {
    'font-size': fontSizes['4xl'],
    color: color.value,
    width: size,
    height: size,
    background: !valid
      ? invalidColor.value
      : highlighted
      ? highlightedColor.value
      : selected
      ? selectedColor.value
      : dflt.value,
    float: 'left',
    margin: margin,
    display: 'grid',
    'justify-content': 'center',
    'align-content': 'center',
    'border-radius': radii.sm,
    'font-weight': locked ? 'bold' : 'normal'
  }
}

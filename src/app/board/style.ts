import { CSSProperties } from 'vue'
import { size as regionSize } from './region/style'
import { margin } from './region/cell/style'

export const size = `calc(3 * ${regionSize} + 6 * ${margin})`

export const style: CSSProperties = {
  width: size,
  height: size
}

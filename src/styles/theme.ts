import baseStyled, { ThemedStyledInterface } from 'styled-components'
import { GColors } from './colors'

export const theme = {
  colors: GColors
}

export type Theme = typeof theme
export const styled = baseStyled as ThemedStyledInterface<Theme>

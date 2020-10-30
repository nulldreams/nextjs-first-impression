import { theme } from '@styles/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'

export const MainTheme: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

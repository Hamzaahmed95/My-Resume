
import React from 'react'
import { useThemeContext } from '../hooks/useThemeContext'

export const getThemeStyle = (className) => {
  const theme = useThemeContext()
  return theme.theme === "dark" ? `${className}_dark` : `${className}_light`
}
import React, { useState } from 'react';
import { ThemeContext } from '../App/index'

const colors = {
  black: '#000000',
  white: '#ffffff',
  light_pink: '#FFA7C3',
  dark_pink: '#D33668',
}

const themes = {
  light: {
    background: colors.black,
    color: colors.white,
    fontFamily: 'Merriweather, Georgia, serif',
    pink: {
      color: colors.light_pink,
    }
  },
  dark: {
    background: colors.white,
    color: colors.black,
    fontFamily: 'Merriweather, Georgia, serif',
    pink: {
      color: colors.dark_pink,
    }
  }
}

export const ThemeProvider = ({ children }) => {

  const [activeBar, setActiveBar] = useState("blogs")
  const [theme, setTheme] = useState("light")

  const handleChangeActiveBar = (value) => {
    setActiveBar(value)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  const providerValue = { theme: theme, toggleTheme, activeBar: activeBar, handleChangeActiveBar, newTheme: themes[theme] }

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}
import React, { useState } from 'react';
import { ThemeContext } from '../App/index'

const colors = {
  black: '#081229',
  white: '#ffffff',
  light_pink: '#D33668',
  dark_pink: '#FFA7C3',
  shades_light: '#191D3A',
  shades_dark: '#ffffff'
}

const themes = {
  light: {
    background: colors.black,
    color: colors.white,
    fontFamily: 'Merriweather, Georgia, serif',
    pink: {
      color: colors.white,
      borderBottom: `0.2px solid ${colors.light_pink}`,
      paddingBottom: '2.5px',

    },
    normal: {
      color: colors.white,
    },
    shades: {
      border: `0.1px solid ${colors.black}`,
      background: colors.shades_light,
    }
  },
  dark: {
    background: colors.white,
    color: colors.black,
    fontFamily: 'Merriweather, Georgia, serif',
    pink: {
      color: colors.black,
      borderBottom: `0.2px solid ${colors.light_pink}`,
      paddingBottom: '2.5px',
    },
    normal: {
      color: colors.black,
    },
    shades: {
      border: `0.1px solid ${colors.black}`,
      background: colors.shades_dark,
    }
  }
}

export const ThemeProvider = ({ children }) => {

  const [activeBar, setActiveBar] = useState("aboutMe")
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
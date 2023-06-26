import React, { useState } from 'react';
import { ThemeContext } from '../App/index'

const colors = {
  black: '#081229',
  white: '#ffffff',
  light_pink: '#FFA7C3',
  dark_pink: '#D33668',
  shades_light: '#191D3A',
  shades_dark: '#f5f5f5'
}

const themes = {
  light: {
    background: colors.black,
    color: colors.white,
    fontFamily: 'Merriweather, Georgia, serif',
    pink: {
      color: colors.white,
      borderBottom: `0.2px solid ${colors.light_pink}`,
      paddingBottom:'2.5px'
    },
    normal: {
      color: colors.white,
    },
    shades:{
      background: colors.shades_light,
    }
  },
  dark: {
    background: colors.white,
    color: colors.black,
    fontFamily: 'Merriweather, Georgia, serif',
    pink: {
      color: colors.dark_pink,
      borderBottom: `0.2px solid ${colors.dark_pink}`,
      paddingBottom:'2.5px'
    },
    normal: {
      color: colors.black,
    },
    shades:{
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
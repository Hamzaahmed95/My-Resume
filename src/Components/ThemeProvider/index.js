import React, { useState, createContext } from 'react';
import { ThemeContext } from '../App/index'


const themes = {
  light: {
    background: '#000000',
    color: '#000000',
    height: '100%'
  },
  dark: {
    background: '#ffffff',
    color: '#e9e9e9',
    height: '100%'
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
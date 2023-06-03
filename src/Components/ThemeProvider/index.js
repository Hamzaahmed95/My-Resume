import React, { useState, createContext } from 'react';
import {ThemeContext} from '../App/index'

export const ThemeProvider = ({ children }) => {

  const [activeBar, setActiveBar] = useState("aboutMe")
  const [theme, setTheme] = useState("light")

  const handleChangeActiveBar = (value) => {
    setActiveBar(value)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  const providerValue = { theme: theme, toggleTheme, activeBar: activeBar, handleChangeActiveBar }

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}
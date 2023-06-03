import React, { Component, useState } from 'react';

import './App.css';
import { Sidebar } from '../Sidebar/Sidebar'
import { MainComponent } from '../MainComponent/MainComponent'
import { sidebar_background_dark, sidebar_background_light, main_component_background_dark, main_component_background_light } from '../../utils/styles'
import { getThemeStyle } from '../../utils/utility';

export const ThemeContext = React.createContext();

const themes = {
  light: { background: '#fff', color: '#000' },
  dark: { background: '#171717', color: '#fff' }
}

const App = () => {
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
      <Sidebar />
      <MainComponent />
    </ThemeContext.Provider>
  )

}
export default App;

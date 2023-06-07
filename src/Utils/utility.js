
import React from 'react'
import Profile from '../images/profile.jpg'
import { useThemeContext } from '../hooks/useThemeContext'

export const DisplayProfilePicture = () => (
  <div align="center">
    <img className="profile_picture" src={Profile} width="200" height="250" />
  </div>
)

export const ToggleButton = () => {
  const theme = useThemeContext()
  return (
    <div className="toggle_button list">
      <label className="switch">
        <input onChange={theme.toggleTheme} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export const getThemeStyle = (className) => {
  const theme = useThemeContext()
  return theme.theme === "dark" ? `${className}_dark` : `${className}_light`
}
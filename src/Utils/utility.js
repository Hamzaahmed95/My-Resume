
import React from 'react'
import Profile from '../images/profile.jpg'
import {
  ABOUT_ME,
  ACHIEVEMENT,
  BLOGS,
  PROJECTS,
  standard_day_theme,
  standard_font_day_theme,
  standard_font_night_theme,
  standard_night_theme
} from './constants'
import { useThemeContext } from '../hooks/useThemeContext'

const sections = [{ name: "aboutMe", text: ABOUT_ME }, { name: "achievements", text: ACHIEVEMENT }, { name: "blogs", text: BLOGS }, { name: "projects", text: PROJECTS }]



export const DisplayProfilePicture = () => (
  <div align="center">
    <img className="profile_picture" src={Profile} width="200" height="250" />
  </div>
)

export const DisplaySections = () => {

  const theme = useThemeContext()
  return (
    sections.map((section, index) => (
      <div key={index} onClick={() => theme.handleChangeActiveBar(section.name)} className="list">
        <p style={theme.theme === "dark" ? (theme.activeBar == section.name ? standard_font_night_theme : standard_night_theme) : (theme.activeBar == section.name ? standard_font_day_theme : standard_day_theme)} className="intropara" > {section.text}</p>
      </div>
    ))
  )
}

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
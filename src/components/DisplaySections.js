import React from "react"
import { useThemeContext } from "../hooks/useThemeContext"
import { sections, standard_day_theme, standard_font_day_theme, standard_font_night_theme, standard_night_theme } from "../utils/constants"

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

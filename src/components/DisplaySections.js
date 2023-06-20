import React from "react"
import { useThemeContext } from "../hooks/useThemeContext"
import { sections } from "../utils/constants"

export const DisplaySections = () => {

  const theme = useThemeContext()
  return (
    sections.map((section, index) => (
      <div key={index} onClick={() => theme.handleChangeActiveBar(section.name)} className="list">
        <p style={theme.activeBar == section.name ? theme.newTheme.pink : theme.newTheme}>
          {section.text}
        </p>
      </div>
    ))
  )
}

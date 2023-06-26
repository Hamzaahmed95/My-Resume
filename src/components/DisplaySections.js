import React from "react"
import { useThemeContext } from "../hooks/useThemeContext"
import { sections } from "../utils/constants"

export const DisplaySections = () => {

  const theme = useThemeContext()

  return (
    <div className="list" style={theme.newTheme.shades}>
      {sections.map((section, index) => (
        <p key={index} onClick={() => theme.handleChangeActiveBar(section.name)} style={theme.activeBar == section.name ? theme.newTheme.pink : theme.newTheme.normal}>
          {section.text}
        </p>
      ))}
    </div>
  )
}

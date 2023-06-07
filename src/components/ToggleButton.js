import React from "react"
import { useThemeContext } from "../hooks/useThemeContext"

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
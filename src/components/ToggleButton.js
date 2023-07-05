import React from "react"
import { useThemeContext } from "../hooks/useThemeContext"

export const ToggleButton = (props) => {
  const theme = useThemeContext()
  console.log(theme.theme)
  return (
    <div className={props.className}>
      <label className="switch" >
        <input onChange={theme.toggleTheme} type="checkbox" />
        <span className={`slider round_${theme.theme}`} ></span>
      </label>
    </div>
  )
}
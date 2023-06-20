import React from "react"
import { useThemeContext } from "../hooks/useThemeContext"
import { icons } from "../utils/constants"


export const DisplayIcons = () => {

  const theme = useThemeContext()

  return (<div className="icons">
    {icons.map((icon, index) => (
      <a key={index} href={icon.url} >
        <img className="each_icon" src={icon.name[theme.theme]} />
      </a>
    ))}
  </div>)
}

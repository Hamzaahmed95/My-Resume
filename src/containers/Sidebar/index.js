import React from 'react'
import './index.css'
import 'typeface-merriweather'
import { useThemeContext } from '../../hooks/useThemeContext'
import { DisplayIcons, ToggleButton, DisplaySections, DisplayProfilePicture } from '../../components'

export const Sidebar = () => {
    const theme = useThemeContext()
    return (
        <div align="center" className={`sidebar_background_${theme.theme} sidebar_component`} >
            <DisplayProfilePicture />
            <DisplayIcons />
            <hr className={`line_${theme.theme}`} />
            <DisplaySections />
            <ToggleButton />
        </div>
    )
}


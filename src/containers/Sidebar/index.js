import React from 'react'
import './index.css'
import 'typeface-merriweather'
import { DisplayProfilePicture, DisplaySections, ToggleButton, getThemeStyle } from '../../utils/utility'
import { useThemeContext } from '../../hooks/useThemeContext'
import { DisplayIcons } from '../../components/DisplayIcons'

export const Sidebar = () => {
    const theme = useThemeContext()
    return (
        <div style={theme.newTheme} className={getThemeStyle('sidebar_background')} >
            <DisplayProfilePicture />
            <DisplayIcons />
            <hr className={getThemeStyle('line')} />
            <DisplaySections />
            <ToggleButton />
        </div >
    )
}


import React from 'react'
import './index.css'
import 'typeface-merriweather'
import { getThemeStyle } from '../../utils/utility'
import { useThemeContext } from '../../hooks/useThemeContext'
import { DisplayIcons, ToggleButton, DisplaySections, DisplayProfilePicture } from '../../components'

export const Sidebar = () => {
    const theme = useThemeContext()
    return (
        <div className={`${getThemeStyle('sidebar_background')} sidebar_component`} >
            <DisplayProfilePicture />
            <DisplayIcons />
            <hr className={getThemeStyle('line')} />
            <DisplaySections />
            <ToggleButton />
        </div >
    )
}


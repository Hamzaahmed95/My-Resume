import React from 'react'
import './index.css'
import 'typeface-merriweather'
import { useThemeContext } from '../../hooks/useThemeContext'
import { DisplayIcons, ToggleButton, DisplaySections, DisplayProfilePicture } from '../../components'

export const Sidebar = () => {
    const theme = useThemeContext()
    return (
        <div className={`sidebar_component sidebar_background_${theme.theme} `} >
            <div align="center" className='sidebar_position'>
                <div className='sidebar_items'>
                    <DisplayProfilePicture />
                    <DisplayIcons />
                    <hr className={`line_${theme.theme}`} />
                    <DisplaySections />
                </div>
                <div>
                    <ToggleButton />
                </div>
            </div>
        </div>
    )
}
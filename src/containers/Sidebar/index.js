import React from 'react'
import './index.css'
import 'typeface-merriweather'
import { useThemeContext } from '../../hooks/useThemeContext'
import { DisplayIcons, ToggleButton, DisplaySections, DisplayProfilePicture } from '../../components'

export const Sidebar = () => {
    const theme = useThemeContext()
    return (
        <div className="sidebar_component" >
            <div align="center" className='sidebar_position'>
                <div className='sidebar_items'>
                    <DisplayProfilePicture />
                    <DisplayIcons />
                    <hr className={`line_light`} />
                    <DisplaySections />
                </div>
                <div>
                    <ToggleButton />
                </div>
            </div>
        </div>
    )
}
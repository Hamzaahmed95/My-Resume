import React, { useContext } from 'react'
import './Sidebar.css'
import 'typeface-merriweather'
import { DisplayIcons, DisplayProfilePicture, DisplaySections, ToggleButton, getThemeStyle } from '../../utils/utility'

import { ThemeContext } from '../App/App'

export const Sidebar = () => {

    return (
        <div className={getThemeStyle('sidebar_background')}>
            <div align="center" className="AboutMe">
                <DisplayProfilePicture />
                <DisplayIcons />
                <hr className={getThemeStyle('line')} />
                <DisplaySections />
                <ToggleButton />
            </div>
        </div>
    )
}

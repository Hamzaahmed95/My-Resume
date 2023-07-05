import React from 'react'
import './index.css'
import 'typeface-merriweather'
import { useThemeContext } from '../../hooks/useThemeContext'
import { DisplayIcons, ToggleButton, DisplaySections, DisplayProfilePicture } from '../../components'
import { NAME } from '../../utils/constants'

export const Sidebar = () => {
    const theme = useThemeContext()
    return (
        <div className="sidebar_component" >

            <div className='sidebar_position'>
                <div style={{ display: "flex", justifyContent: "flex-start", width: "100%", padding: "4px" }}>
                    <ToggleButton align="left" className="mobile_view_toggle" />
                    <DisplayIcons className="mobile_view_icons" />
                </div>
                <div align="center" className='sidebar_items' >
                    <DisplayProfilePicture />
                    <h1 className="name_mobile web_view_name">{NAME}</h1>
                    <DisplayIcons className="web_view_icons" />
                    <hr className={`line_light`} />
                    <DisplaySections />
                </div>
                <div align="center" >
                    <ToggleButton className="web_view_toggle" />
                </div>
            </div>
        </div>
    )
}
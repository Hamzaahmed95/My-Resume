import React from 'react'
import './Sidebar.css'
import { line_style_night, line_style } from '../../utils/Constants.js'
import 'typeface-merriweather'
import { DisplayIcons, DisplayProfilePicture, DisplaySections, ToggleButton } from '../../utils/utility'
export const Sidebar = (props) => {
    const {
        activeBar,
        toggle,
        handleChangeActiveBar,
        handleChangeToggle,
    } = props

    return (
        <div align="center" className="AboutMe">
            <DisplayProfilePicture />
            <DisplayIcons toggle={toggle} />
            <hr style={toggle ? line_style : line_style_night} className="line" />
            <DisplaySections toggle={toggle} handleChangeActiveBar={handleChangeActiveBar} activeBar={activeBar} />
            <ToggleButton handleChangeToggle={handleChangeToggle} />
        </div>
    )
}

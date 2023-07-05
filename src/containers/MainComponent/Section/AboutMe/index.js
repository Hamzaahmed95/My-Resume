import React from 'react'
import './index.css'
import { details } from '../../../../utils/constants'

import Bullets_Light from '../../../../images/bullets_light.png'
import Bullets_Dark from '../../../../images/bullets_dark.png'
import { useThemeContext } from '../../../../hooks/useThemeContext'

export const AboutMe = () => {
    const theme = useThemeContext()

    let skills = ['Javascript (ES6+)', 'Typescript', 'Reactjs', 'Redux', 'Webpack (v5)']

    return (
        <div className="about_me_container">
            <div className="section_heading">
                <h1 className={`about_me_heading_${theme.theme}`}>What I do</h1>
                <hr className={`line_general_${theme.theme} intro`} />
            </div>
            <p className={`about_me_content_${theme.theme}`} >{details}</p>
            <h1 className={`about_me_heading_${theme.theme}`} >Skills</h1>
            <hr className={`line_general_${theme.theme} skills`} />
            {skills.map((skill, index) => {
                let final_skill = " " + skill;
                return (
                    <div style={{ display: "flex", marginTop: "15px" }} key={index} className={`about_me_content_${theme.theme}`}>
                        <img src={theme.theme === "dark" ? Bullets_Dark : Bullets_Light} width="15" height="19" />
                        <span style={{ marginLeft: "5px" }}>{final_skill}</span>
                    </div>
                )
            })}
        </div>
    )
}

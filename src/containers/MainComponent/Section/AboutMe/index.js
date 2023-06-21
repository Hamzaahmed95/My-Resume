import React from 'react'
import './index.css'
import { details } from '../../../../utils/constants'

import Bullets from '../../../../images/day/bullets.png'
import Bullets_NIGHT from '../../../../images/night/bullets.png'
import { useThemeContext } from '../../../../hooks/useThemeContext'

export const AboutMe = () => {
    const theme = useThemeContext()

    let skills = ['Javascript (ES6+)', 'Typescript', 'Reactjs', 'Redux', 'Webpack (v5)']

    return (
        <div className="about_me_container">
            <h1 className={`about_me_heading_${theme.theme}`}>What I do</h1>
            <p className={`about_me_content_${theme.theme}`} >{details}</p>
            <h1 className={`about_me_heading_${theme.theme}`} >Skills</h1>
            {skills.map((skill, index) => {
                let final_skill = " " + skill;
                return (
                    <h2 key={index} className={`about_me_content_${theme.theme}`}>
                        <img src={theme.theme === "dark" ? Bullets_NIGHT : Bullets} width="15" height="19" />
                        {final_skill}
                    </h2>
                )
            })}
        </div>
    )
}

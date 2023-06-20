import React from 'react'
import './index.css'
import 'typeface-montserrat'
import 'typeface-merriweather'
import { details, heading_style_day, heading_style_night, subgraph_style_day, subgraph_style_night } from '../../../../utils/constants'

import Bullets from '../../../../images/day/bullets.png'
import Bullets_NIGHT from '../../../../images/night/bullets.png'
import { useThemeContext } from '../../../../hooks/useThemeContext'

export const AboutMe = () => {
    const theme = useThemeContext()

    let skills = ['Javascript (ES6+)', 'Typescript', 'Reactjs', 'Redux', 'Webpack (v5)']

    return (
        <div className="MyIntroduction">
            <div className="MyIntroductionHeadings">
                <div className="v2"><h1 style={theme.theme === "dark" ? heading_style_day : heading_style_night} className="name2">What I do</h1></div>
            </div>
            <p style={theme.theme === "dark" ? subgraph_style_day : subgraph_style_night} className="">{details}</p>
            <div className="MyIntroductionHeadings">
                <div className="v2"><h1 style={theme.theme === "dark" ? heading_style_day : heading_style_night} className="name2">Skills</h1></div>
            </div>
            {skills.map((skill, index) => {
                let final_skill = " " + skill;
                return (
                    <h2 key={index} style={theme.theme === "dark" ? subgraph_style_day : subgraph_style_night}>
                        {theme.theme === "dark" ? <img src={Bullets_NIGHT} width="15" height="19" /> : <img src={Bullets} width="15" height="19" />}
                        {final_skill}
                    </h2>
                )
            })}

        </div>
    )
}

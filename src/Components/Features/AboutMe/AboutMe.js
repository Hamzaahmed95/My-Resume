import React from 'react'
import './AboutMe.css'
// import 'typeface-montserrat'
// import 'typeface-merriweather'
import { details, details_2,heading_style_day,heading_style_night,subgraph_style_day,subgraph_style_night } from '../../../Utils/Constants'

import Bullets from '../../../images/day/bullets.png'
import Bullets_NIGHT from '../../../images/night/bullets.png'

export const AboutMe = (props) => {
    const toggle = props.toggle
   
    let skills = ['Java', 'Android', 'Javascript', 'Reactjs', 'Kotlin']
   
    return (
        <div className="MyIntroduction">
            <div className="MyIntroductionHeadings">
                <div className="v2"><h1 style={toggle? heading_style_day:heading_style_night} className="name2">What I do</h1></div>
            </div>
            <p style={toggle?subgraph_style_day:subgraph_style_night} className="subgraph">{details} {details_2}</p>
            <div className="MyIntroductionHeadings">
                <div className="v2"><h1 style={toggle? heading_style_day:heading_style_night} className="name2">Skills</h1></div>
            </div>
            {skills.map(skill => {
                let final_skill = " " + skill;
                return (
                    <div>
                        <div>
                            <h2 style={toggle?subgraph_style_day:subgraph_style_night}>
                               {props.toggle? <img src={Bullets_NIGHT} width="15" height="19" />:<img src={Bullets} width="15" height="19" />} 
                               {final_skill}
                            </h2>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

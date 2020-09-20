import React from 'react'
import './AboutMe.css'
import 'typeface-montserrat'
import 'typeface-merriweather'
import { details, details_2 } from '../../../Utils/Constants'

import Bullets from '../../../images/day/bullets.png'
import Bullets_NIGHT from '../../../images/night/bullets.png'

export const AboutMe = (props) => {
    const toggle = props.toggle
    let subgraphStyle = {
        color: '#ffffff',
        fontFamily: 'Merriweather, Georgia, serif',
        fontSize: '16',
        fontWeight: '40'
    }
    let skills = ['Java', 'Android', 'Javascript', 'Reactjs', 'Kotlin']
    let name2Style = {
        color: '#ffffff',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '900'
    }
    if (toggle) {

        subgraphStyle = {
            color: '#000000',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '16',
            fontWeight: '40'
        }
        name2Style = {
            color: '#D33668',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
    } else {
        subgraphStyle = {
            color: '#ffffff',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '16',
            fontWeight: '40'
        }
        name2Style = {
            color: '#FFA7C3',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
    }
    return (
        <div className="MyIntroduction">
            <div className="MyIntroductionHeadings">
                <div className="v2"><h1 style={name2Style} className="name2">What I do</h1></div>
            </div>
            <p style={subgraphStyle} className="subgraph">{details} {details_2}</p>
            <div className="MyIntroductionHeadings">
                <div className="v2"><h1 style={name2Style} className="name2">Skills</h1></div>
            </div>
            {skills.map(skill => {
                let final_skill = " " + skill;
                return (
                    <div>
                        <div>
                            <h2 style={subgraphStyle}>
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

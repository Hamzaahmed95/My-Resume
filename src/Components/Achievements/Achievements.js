import React from 'react'
import './Achievements.css'
import { Achievements_Main_Heading, Blog_1_URL, Blog_2_URL, Blog_3_URL, Achievement_1_Heading, Achievement_2_Heading, Achievement_3_Heading, Blog_4_Heading, Blog_5_Heading } from '../../Utils/Constants.js'
import Achievement1 from '../../images/achievement1.jpeg'
import Achievement2 from '../../images/achievement2.jpeg'
import Achievement3 from '../../images/achievement3.jpeg'

export const Achievements = (props) => {

    const toggle = props.toggle

    let name2Style = {
        color: '#ffffff',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '900'
    }
    let subgraphStyle = {
        color: '#FFA7C3',
        fontFamily: 'Merriweather, Georgia, serif',
        fontSize: '10',
        fontWeight: '40'
    }
    if (toggle) {

        name2Style = {
            color: '#FFA7C3',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
        subgraphStyle = {
            color: '#FFA7C3',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '10',
            fontWeight: '40'
        }
    } else {
        name2Style = {
            color: '#FFA7C3',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
        subgraphStyle = {
            color: '#FFA7C3',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '10',
            fontWeight: '40',
            borderBottom: '1px solid #FFA7C3'
        }
    }
    return (
        <div className="Achievements">
            <div className="Achievementsheadings">
                <div className="v1"></div>
                <div className="v2"><h1 style={name2Style} className="name2">{Achievements_Main_Heading}</h1></div>
            </div>
            <div className="achievementsPieces">
                <div align="center" className="blog1">
                    <img src={Achievement1} />
                    <p style={subgraphStyle} className="achievement_headings">{Achievement_1_Heading}</p>
                </div>
                <div align="center" className="blog2">
                    <img src={Achievement2} />
                    <p style={subgraphStyle} className="blog_headings">{Achievement_2_Heading}</p>
                </div>
                <div align="center" className="blog3">
                    <img src={Achievement3} />
                    <p style={subgraphStyle} className="blog_headings">{Achievement_3_Heading}</p>
                </div>
            </div>
        </div>
    )
}

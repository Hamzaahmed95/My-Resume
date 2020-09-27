import React from 'react'
import './Achievements.css'
import { Achievements_Main_Heading, Achievement_1_Content, Achievement_2_Content, Achievement_3_Content, Achievement_1_Heading, Achievement_2_Heading, Achievement_3_Heading, Blog_4_Heading, Blog_5_Heading } from '../../../Utils/Constants'
import Achievement1 from '../../../images/achievement1.jpeg'
import Achievement2 from '../../../images/achievement2.jpeg'
import Achievement3 from '../../../images/achievement3.jpeg'

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

        fontWeight: '900',
    }
    let background ={
        backgroundColor: '#363D48'
    }
    if (toggle) {

        name2Style = {
            color: '#D33668',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
        subgraphStyle = {
            color: '#000000',
            fontFamily: 'Merriweather, Georgia, serif',

            fontWeight: '400',
        }
        background ={
            backgroundColor: '#FDFAE0'
        }
    } else {
        name2Style = {
            color: '#FFA7C3',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
        subgraphStyle = {
            color: '#ffffff',
            fontFamily: 'Merriweather, Georgia, serif',
            fontWeight: '400',
        }
        background ={
            backgroundColor: '#363D48'
        }
    }
    return (
        <div className="Achievements">
            <div className="Achievementsheadings">
                <div className="v2"><h1 style={name2Style}>{Achievements_Main_Heading}</h1></div>
            </div>
            <div className="achievementsPieces">
                <div align="left" style = {background} className="blog1">
                    <img src={Achievement1} />
                    <div>
                        <h2 style={name2Style} >{Achievement_1_Heading}</h2>
                        <p className= "sub_style" style={subgraphStyle}>{Achievement_1_Content}</p>
                    </div>
                </div>
                <div align="left" style = {background}className="blog2">
                    <img src={Achievement2} />
                    <div>
                        <h2 style={name2Style} >{Achievement_2_Heading}</h2>
                        <p className= "sub_style" style={subgraphStyle}>{Achievement_2_Content}</p>
                    </div>
                </div>
                <div align="left" style = {background} className="blog3">
                    <img src={Achievement3} />
                    <div>
                        <h2 style={name2Style} >{Achievement_3_Heading}</h2>
                        <p sclassName= "sub_style" tyle={subgraphStyle}>{Achievement_3_Content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './Introduction.css'
import Email from '../../images/day/email.png'
import Email_NIGHT from '../../images/night/email.png'
import Phone from '../../images/day/phone.png'
import Phone_NIGHT from '../../images/night/phone.png'
import { NAME, OCCUPATION, JAVASCRIPT, PYTHON, ANDROID } from '../../Utils/Constants.js'

import 'typeface-merriweather'

export const Introduction = (props) => {

    const toggle = props.toggle
    let mainHeadingStyle = {
        color: '#ffffff',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '900',
        fontSize: '25px'
    }
    let subgraphStyle = {
        color: '#ffffff',
        fontFamily: 'Merriweather, Georgia, serif',

    }
    let rainbow1Style = {
        color: '#ffffff'
    }
    let headingbackground = {
        border: '1px solid grey',
        borderColor: '#d3d3d3',
        borderRadius: '10px',
        background:'#373D49'
    }
    if (toggle) {
        mainHeadingStyle = {
            color: '#000000',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900',
            fontSize: '25px'
        }
        subgraphStyle = {
            color: '#000000',
            fontFamily: 'Merriweather, Georgia, serif',

        }
        rainbow1Style = {
            background: '#D33668',
            color: '#ffffff'
        }
        headingbackground = {
            border: '1px solid grey',
            background:'#FEFAE1',
            borderRadius: '10px',
            borderColor: '#d3d3d3',
        }
    } else {
        mainHeadingStyle = {
            color: '#ffffff',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900',
            fontSize: '25px'

        }
        subgraphStyle = {
            color: '#ffffff',
            fontFamily: 'Merriweather, Georgia, serif',

        }
        rainbow1Style = {
            background: '#FFA7C3'
        }
        headingbackground = {
            border: '1px solid grey',
            borderRadius: '10px',
            borderColor: '#d3d3d3',
            background:'#373D49'
        }
    }
    return (
        <div className="Intro">
            <div className="Intro1">
                <div className="Introduction">
                    <h1 style={mainHeadingStyle} className="name">{NAME}</h1>
                    <p style={subgraphStyle} className="subgraph1">I'm a software engineer specialized in frontend with <span style={rainbow1Style} className="rainbow">React.</span> I'm also working and writing in Android development with <span style={rainbow1Style} className="rainbow">Java/Kotlin.</span></p>
                </div>
                <div style={headingbackground} className="Introduction2">
                    <h4 style={subgraphStyle}>Currently working as an <span style={rainbow1Style} className="rainbow">Android Developer</span> at Hong Leong Bank,
                        Kuala Lumpur, Malaysia
                    </h4>
                    <p className="subgraph2" style={subgraphStyle}> {props.toggle ? <img src={Email_NIGHT} width={20} height={14} /> : <img src={Email} width={20} height={14} />} hamza.ahmed0402@gmail.com</p>
                    <p className="subgraph2" style={subgraphStyle}>{props.toggle ? <img src={Phone_NIGHT} width={20} height={20} /> : <img src={Phone} width={20} height={20} />} (+60) 18 390 8407</p>
                </div>
            </div>
        </div>
    )
}

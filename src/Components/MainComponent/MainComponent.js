import React from 'react'
import './MainComponent.css'
import Email from '../../images/email.png'
import Email_NIGHT from '../../images/email_night.png'
import Phone from '../../images/phone.png'
import Phone_NIGHT from '../../images/phone_night.png'
import { MyIntroduction } from '../MyIntroduction/MyIntroduction'
import { Introduction } from '../Introduction/Introduction'
import { Achievements } from '../Achievements/Achievements'
import { Blogs } from '../Blogs/Blogs'
import { Youtube } from '../Youtube/Youtube'
import { Events } from '../Events/Events'
import { Projects } from '../Projects/Projects'
import AndroidIcon from '../../images/android.png'
import ReactIcon from '../../images/react.png'
import NodeIcon from '../../images/node.png'
import { NAME, OCCUPATION, JAVASCRIPT, PYTHON, ANDROID } from '../../Utils/Constants.js'

import 'typeface-merriweather'

export const MainComponent = (props) => {

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
            <Introduction/>
           
            {props.about_me ?
                <div className="Projects">
                    <MyIntroduction toggle={toggle} />
                </div> : ''}
            <div className="for_width">
                {props.achievements ?
                    <div className="Achievements">
                        <Achievements toggle={toggle} />
                    </div> : ''}
                {props.blogs ? <div className="Blogs">
                    <Blogs toggle={toggle} />
                </div> : ''}
                {props.youtube ? <div className="Blogs">
                    <Youtube toggle={toggle} />
                </div> : ''}
                {props.events ? <div className="Blogs">
                    <Events toggle={toggle} />
                </div> : ''}
                {props.projects ? <div className="Blogs">
                    <Projects toggle={toggle} />
                </div> : ''}
            </div>
        </div>
    )
}

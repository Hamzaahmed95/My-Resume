import React from 'react'
import './Intro.css'
import Picture from '../../images/picture1_1.png'
import { Projects } from '../Projects/Projects'
import { Achievements } from '../Achievements/Achievements'
import { Blogs } from '../Blogs/Blogs'
import { Youtube } from '../Youtube/Youtube'
import { Events } from '../Events/Events'
import AndroidIcon from '../../images/android.png'
import ReactIcon from '../../images/react.png'
import NodeIcon from '../../images/node.png'
import { NAME, OCCUPATION, JAVASCRIPT, PYTHON, ANDROID } from '../../Utils/Constants.js'

import 'typeface-merriweather'

export const Intro = (props) => {

    const toggle = props.toggle
    let mainHeadingStyle = {
        color:'#ffffff',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight:'900',
        fontSize:'32'
    }
    let subgraphStyle = {
        color:'#ffffff',
        fontFamily:'Merriweather, Georgia, serif',
        fontSize:'10',
        fontWeight:'40'
    }
    let rainbow1Style = {
        color:'#ffffff'
    }
    if(toggle){
        mainHeadingStyle = {
            color:'#ffffff',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight:'900',
            fontSize:'32'
        }
        subgraphStyle = {
            color:'#ffffff',
            fontFamily:'Merriweather, Georgia, serif',
            fontSize:'10',
            fontWeight:'40'
        }
        rainbow1Style ={
            color:'#000000'
        }
    }else{
        mainHeadingStyle = {
            color:'#ffffff',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight:'900',
            fontSize:'32px'
            
        }
        subgraphStyle = {
            color:'#ffffff',
            fontFamily:'Merriweather, Georgia, serif',
            fontSize:'25px',
            fontWeight:'40'
        }
        rainbow1Style ={
            background:'#FFA7C3'
        }
    }
    return (
        <div className="Intro">
            <div className="Intro1">
                <div className="Introduction">
                    <h1 style = {mainHeadingStyle} className="name">{NAME}</h1>
                    <p style={subgraphStyle} className="subgraph1">I'm a software engineer specialized in frontend with <span style={rainbow1Style}className="rainbow">React.</span> I'm also working and writing in Android development with <span style={rainbow1Style} className="rainbow">Java/Kotlin.</span></p>
                </div>
    
                <div align="center" className="ProfileImage">
                    <img src={Picture} width="300" height="357" />
                </div>
            </div>
            {props.projects ? <div className="Projects">
                <Projects toggle={toggle}/>
            </div> : ''}
            {props.achievements ? <div className="Achievements">
                <Achievements toggle={toggle}/>
            </div> : ''}
            {props.blogs ? <div className="Blogs">
                <Blogs toggle={toggle}/>
            </div> : ''}
            {props.youtube ? <div className="Blogs">
                <Youtube toggle={toggle}/>
            </div> : ''}
            {props.events ? <div className="Blogs">
                <Events toggle={toggle}/>
            </div> : ''}
        </div>
    )
}

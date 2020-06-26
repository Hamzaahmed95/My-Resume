import React from 'react'
import './Intro.css'
import Picture from '../../images/picture1_1.png'
import PictureLight from '../../images/picture1_v3.png'
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
       
    }
    let rainbow1Style = {
        color:'#ffffff'
    }
    if(toggle){
        mainHeadingStyle = {
            color:'#000000',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight:'900',
            fontSize:'32'
        }
        subgraphStyle = {
            color:'#000000',
            fontFamily:'Merriweather, Georgia, serif',
         
        }
        rainbow1Style ={
            background:'#D33668',
            color:'#ffffff'
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
                    {toggle?<img src={PictureLight} width="300" height="357" />:<img src={Picture} width="300" height="357" />}
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

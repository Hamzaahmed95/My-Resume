import React from 'react'
import './Intro.css'
import Picture from '../../images/picture1.png'
import {Projects }from '../Projects/Projects'
import {Achievements }from '../Achievements/Achievements'
import {Blogs }from '../Blogs/Blogs'
import {Youtube }from '../Youtube/Youtube'
import AndroidIcon from '../../images/android.png'
import ReactIcon from '../../images/react.png'
import NodeIcon from '../../images/node.png'
import {NAME,OCCUPATION,JAVASCRIPT,PYTHON,ANDROID} from '../../Utils/Constants.js'

export const Intro = (props) => {
    return (
        <div className="Intro">
            <div className="Intro1">
                <div className="Introduction">
                    <h1 className="name">{NAME}</h1>
                    <p className="subgraph1">I'm a software engineer specialized in frontend and backend development with <span className="rainbow">React</span> and <span className="rainbow">Node/Python Django</span> respectively. I'm also working and writing in Android development with <span className="rainbow">Java/Kotlin.</span></p>
                   
                </div>
                <div align="center" className="ProfileImage"><img src={Picture} width="300" height="357" /></div>
            </div>
            {props.projects?<div className="Projects">
               <Projects/>
            </div>:''}
            {props.achievements?<div className="Achievements">
               <Achievements/>
            </div>:''}
            {props.blogs?<div className="Blogs">
               <Blogs/>
            </div>:''}
            {props.youtube?<div className="Blogs">
               <Youtube/>
            </div>:''}
        </div>
    )
}

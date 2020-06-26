import React from 'react'
import './AboutMe.css'
import Profile from '../../images/profile.png'
import Github from '../../images/github.png'
import Twitter from '../../images/twitter.png'
import LinkedIn from '../../images/linkedin.png'
import Medium from '../../images/medium.png'
import Aboutme from '../../images/aboutme.png'
import Portfolio from '../../images/portfolio.png'
import { NAME, ABOUT_ME, TalentHunters, YOUTUBER, ACHIEVEMENT, BLOGS, LINKEDIN_URL, MEDIUM_URL, GITHUB_URL, TWITTER_URL } from '../../Utils/Constants.js'
import 'typeface-merriweather'

export const AboutMe = (props) => {

    const project1 = props.projects1
    const achievements1 = props.achievements1
    const blogs1 = props.blogs1
    const youtube1 = props.youtube1
    const events1 = props.events1
    const toggle = props.toggle1
    let project1Style = {
        color: '#dfdfdf',
        fontFamily:'Merriweather, Georgia, serif'
    }
    let achievements1Style = {
        color: '#dfdfdf',
        fontFamily:'Merriweather, Georgia, serif'
    }
    let blogs1Style = {
        color: '#dfdfdf',
        fontFamily:'Merriweather, Georgia, serif'
    }
    let youtube1Style = {
        color: '#dfdfdf',
        fontFamily:'Merriweather, Georgia, serif'
    }
    let events1Style = {
        color: '#dfdfdf',
        fontFamily:'Merriweather, Georgia, serif'
    }
    let intropara2Style = {
        color:'#000000',
        fontFamily:'Merriweather, Georgia, serif'
    }
    
    
    if(toggle){
        intropara2Style = {
            color:'#000000',
            fontFamily:'Merriweather, Georgia, serif'
        }
        project1Style = {
            color: '#000000',
            fontFamily:'Merriweather, Georgia, serif'
        }
        achievements1Style = {
            color: '#000000',
            fontFamily:'Merriweather, Georgia, serif'
        }
        blogs1Style = {
            color: '#000000',
            fontFamily:'Merriweather, Georgia, serif'
        }
        events1Style = {
            color: '#000000',
            fontFamily:'Merriweather, Georgia, serif'
        }
        intropara2Style = {
            color:'#000000',
            fontFamily:'Merriweather, Georgia, serif'
        }
        youtube1Style = {
            color: '#000000',
            fontFamily:'Merriweather, Georgia, serif'
        }
        if (project1) {
            project1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (achievements1) {
            achievements1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (blogs1) {
            blogs1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (youtube1) {
            youtube1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (events1) {
            events1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
    }else{
        intropara2Style = {
            color:'#e9e9e9',
            fontFamily:'Merriweather, Georgia, serif'
        }
        project1Style = {
            color: '#dfdfdf',
            fontFamily:'Merriweather, Georgia, serif'
        }
        achievements1Style = {
            color: '#dfdfdf',
            fontFamily:'Merriweather, Georgia, serif'
        }
        blogs1Style = {
            color: '#dfdfdf',
            fontFamily:'Merriweather, Georgia, serif'
        }
        events1Style = {
            color: '#dfdfdf',
            fontFamily:'Merriweather, Georgia, serif'
        }
    
        youtube1Style = {
            color: '#dfdfdf',
            fontFamily:'Merriweather, Georgia, serif'
        }
        if (project1) {
            project1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (achievements1) {
            achievements1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (blogs1) {
            blogs1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (youtube1) {
            youtube1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (events1) {
            events1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
    }
    console.log("hamza1: "+events1Style.color)

    return (
        
        <div align="center" className="AboutMe">
            <img className="profile_picture" src={Profile} width="200" height="250" />
            <p style={intropara2Style} className="intropara2">
                Hi, my name is <span style={intropara2Style} className="name_bold">Hamza Ahmed</span> and I'm a software engineer. Welcome to my personal website!
            </p>
            <p className="heading_hidden">{NAME}</p>
            <div className="icons">
                <a href={TWITTER_URL} ><img className="each_icon" src={Twitter} /></a>
                <a href={GITHUB_URL} ><img className="each_icon" src={Github} /></a>
                <a href={LINKEDIN_URL} ><img className="each_icon" src={LinkedIn} /></a>
                <a href={MEDIUM_URL} ><img className="each_icon" src={Medium} /></a>
            </div>
            <hr className="line" />

            <div onClick={props.projects} className="list">
                <p style={project1Style} className="intropara" > {ABOUT_ME}</p>
            </div>
            <div onClick={props.achievements} className="list">
                <p style={achievements1Style} className="intropara" > {ACHIEVEMENT}</p>
            </div>
            <div onClick={props.blogs} className="list">
                <p style={blogs1Style} className="intropara" > {BLOGS}</p>
            </div>
            <div onClick={props.youtube} className="list">
                <p style={youtube1Style} className="intropara" > {YOUTUBER}</p>
            </div>
            <div onClick={props.events} className="list">
                <p style={events1Style} className="intropara"> {TalentHunters}</p>
            </div>
            <div className="toggle_button">
                <label className="switch">
                    <input onChange={props.toggle} type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}

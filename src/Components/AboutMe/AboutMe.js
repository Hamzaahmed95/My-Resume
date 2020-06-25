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

export const AboutMe = (props) => {

    const project1 = props.projects1
    const achievements1 = props.achievements1
    const blogs1 = props.blogs1
    const youtube1 = props.youtube1
    const events1 = props.events1
    let project1Style = {
        color: '#dfdfdf'
    }
    let achievements1Style = {
        color: '#dfdfdf'
    }
    let blogs1Style = {
        color: '#dfdfdf'
    }
    let youtube1Style = {
        color: '#dfdfdf'
    }
    let events1Style = {
        color: '#dfdfdf'
    }
    if (project1) {
        project1Style = {
            color: 'orange'
        }
    }
    if (achievements1) {
        achievements1Style = {
            color: 'orange'
        }
    }
    if (blogs1) {
        blogs1Style = {
            color: 'orange',
        }
    }
    if (youtube1) {
        youtube1Style = {
            color: 'orange',
        }
    }
    if (events1) {
        events1Style = {
            color: 'orange',
        }
    }

    return (
        <div align="center" className="AboutMe">
            <h2 className="heading">{NAME}</h2>
            <img className="profile_picture" src={Profile} width="200" height="250" />
            <p className="intropara2">
                Hi, my name is <span className="name_bold">Hamza Ahmed</span> and I'm a software engineer. Welcome to my personal website!
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
                <p style={events1Style}  className="intropara"> {TalentHunters}</p>
            </div>

        </div>
    )
}

import React from 'react'
import './AboutMe.css'
import Profile from '../../images/profile.png'
import Github from '../../images/github.png'
import Twitter from '../../images/twitter.png'
import LinkedIn from '../../images/linkedin.png'
import Medium from '../../images/medium.png'
import Aboutme from '../../images/aboutme.png'
import Portfolio from '../../images/portfolio.png'
import {NAME,ABOUT_ME,ACHIEVEMENT,BLOGS,LINKEDIN_URL,MEDIUM_URL,GITHUB_URL,TWITTER_URL} from '../../Utils/Constants.js'

export const AboutMe = (props) => {

    return (
        <div align="center" className="AboutMe">
            <h2 className="heading">{NAME}</h2>
            <img src={Profile} width="200" height="250" />
            <p className="intropara">
                Hi, my name is <span className="name_bold">Hamza Ahmed</span> and I'm a software engineer. Welcome to my personal website!
            </p>
            <div className="icons">
                <a href={TWITTER_URL} ><img src={Twitter} width="20" height="20" /></a>
                <a href={GITHUB_URL} ><img src={Github} width="20" height="20" /></a>
                <a href={LINKEDIN_URL} ><img src={LinkedIn} width="20" height="20" /></a>
                <a href={MEDIUM_URL} ><img src={Medium} width="20" height="20" /></a>
            </div>
            <hr className="line" />

            <div onClick={props.projects} className="list">
                <img className="image1" src={Aboutme} width="20" height="20" />
                <p className="intropara" > {ABOUT_ME}</p>
            </div>
            <div onClick={props.achievements} className="list">
                <img className="image1" src={Portfolio} width="20" height="20" />
                <p className="intropara" > {ACHIEVEMENT}</p>
            </div>
            <div onClick={props.blogs} className="list">
                <img className="image1" src={Aboutme} width="20" height="20" />
                <p className="intropara" > {BLOGS}</p>
            </div>
           
        </div>
    )
}

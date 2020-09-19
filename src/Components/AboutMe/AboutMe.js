import React from 'react'
import './AboutMe.css'
import Profile from '../../images/profile.jpg'
import Github from '../../images/github.png'
import Twitter from '../../images/twitter.png'
import LinkedIn from '../../images/linkedin.png'
import Medium from '../../images/medium.png'
import GithubLight from '../../images/github_light.png'
import TwitterLight from '../../images/twitter_light.png'
import LinkedInLight from '../../images/linkedin_light.png'
import MediumLight from '../../images/medium_light.png'
import Aboutme from '../../images/aboutme.png'
import Portfolio from '../../images/portfolio.png'
import { PROJECTS,NAME, ABOUT_ME, TalentHunters, YOUTUBER, ACHIEVEMENT, BLOGS, LINKEDIN_URL, MEDIUM_URL, GITHUB_URL, TWITTER_URL } from '../../Utils/Constants.js'
import 'typeface-merriweather'

export const AboutMe = (props) => {

    const about_me = props.about_me1
    const achievements1 = props.achievements1
    const blogs1 = props.blogs1
    const youtube1 = props.youtube1
    const events1 = props.events1
    const toggle = props.toggle1
    const projects1 = props.projects1

    let aboutMe1Style = {
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

    let projects1Style = {
        color: '#dfdfdf',
        fontFamily:'Merriweather, Georgia, serif'
    }

    let intropara2Style = {
        color:'#000000',
        fontFamily:'Merriweather, Georgia, serif'
    }

    let lineStyle = {
        backgroundColor: '#D33668',
        fontFamily:'Merriweather, Georgia, serif'
    }
    let RoundImage ={
        borderRadius: '50'
    }
    
    
    if(toggle){
        lineStyle = {
            backgroundColor: '#D33668',
            fontFamily:'Merriweather, Georgia, serif'
        }
        intropara2Style = {
            color:'#000000',
            fontFamily:'Merriweather, Georgia, serif'
        }
        aboutMe1Style = {
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
        projects1Style = {
            color: '#000000',
            fontFamily:'Merriweather, Georgia, serif'
        }
        if (about_me) {
            aboutMe1Style = {
                color: '#D33668',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (achievements1) {
            achievements1Style = {
                color: '#D33668',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (blogs1) {
            blogs1Style = {
                color: '#D33668',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (youtube1) {
            youtube1Style = {
                color: '#D33668',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (events1) {
            events1Style = {
                color: '#D33668',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
        if (projects1) {
            projects1Style = {
                color: '#D33668',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
    }else{
        lineStyle = {
            backgroundColor: '#FFA7C3',
            fontFamily:'Merriweather, Georgia, serif'
        }
        intropara2Style = {
            color:'#e9e9e9',
            fontFamily:'Merriweather, Georgia, serif'
        }
        aboutMe1Style = {
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
        if (about_me) {
            aboutMe1Style = {
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
        if (projects1) {
            projects1Style = {
                color: '#FFA7C3',
                fontFamily:'Merriweather, Georgia, serif'
            }
        }
    }
    console.log("hamza1: "+events1Style.color)

    return (
        
        <div align="center" className="AboutMe">
            <img className="profile_picture" src={Profile} width="200" height="250" />

            <div className="icons">
                <a href={TWITTER_URL} >{toggle?<img className="each_icon" src={TwitterLight} />:<img className="each_icon" src={Twitter}/>}</a>
                <a href={GITHUB_URL} >{toggle?<img className="each_icon" src={GithubLight} />:<img className="each_icon" src={Github}/>}</a>
                <a href={LINKEDIN_URL} >{toggle?<img className="each_icon" src={LinkedInLight} />:<img className="each_icon" src={LinkedIn}/>}</a>
                <a href={MEDIUM_URL} >{toggle?<img className="each_icon" src={MediumLight} />:<img className="each_icon" src={Medium}/>}</a>
            </div>
            <hr style={lineStyle}className="line" />

            <div onClick={props.about_me} className="list">
                <p style={aboutMe1Style} className="intropara" > {ABOUT_ME}</p>
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
            <div onClick={props.projects} className="list">
                <p style={projects1Style} className="intropara"> {PROJECTS}</p>
            </div>
            <div className="toggle_button list">
                <label className="switch">
                    <input onChange={props.toggle} type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}

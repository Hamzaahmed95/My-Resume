import React from 'react'
import './Sidebar.css'
import Profile from '../../images/profile.jpg'
import Github from '../../images/night/github.png'
import Twitter from '../../images/night/twitter.png'
import LinkedIn from '../../images/night/linkedin.png'
import Medium from '../../images/night/medium.png'
import GithubLight from '../../images/day/github.png'
import TwitterLight from '../../images/day/twitter.png'
import LinkedInLight from '../../images/day/linkedin.png'
import MediumLight from '../../images/day/medium.png'
import { PROJECTS,line_style_night,line_style, standard_day_theme,standard_font_day_theme,standard_font_night_theme,standard_night_theme,ABOUT_ME, TalentHunters, YOUTUBER, ACHIEVEMENT, BLOGS, LINKEDIN_URL, MEDIUM_URL, GITHUB_URL, TWITTER_URL } from '../../Utils/Constants.js'
//import 'typeface-merriweather'

export const Sidebar = (props) => {

    const about_me = props.about_me
    const achievements = props.achievements
    const blogs = props.blogs
    const toggle = props.toggle
    const projects = props.projects

    return (
        
        <div align="center" className="AboutMe">
            <img className="profile_picture" src={Profile} width="200" height="250" />

            <div className="icons">
                <a href={TWITTER_URL} >{toggle?<img className="each_icon" src={Twitter} />:<img className="each_icon" src={TwitterLight}/>}</a>
                <a href={GITHUB_URL} >{toggle?<img className="each_icon" src={Github} />:<img className="each_icon" src={GithubLight}/>}</a>
                <a href={LINKEDIN_URL} >{toggle?<img className="each_icon" src={LinkedIn} />:<img className="each_icon" src={LinkedInLight}/>}</a>
                <a href={MEDIUM_URL} >{toggle?<img className="each_icon" src={Medium} />:<img className="each_icon" src={MediumLight}/>}</a>
            </div>
            <hr style={toggle? line_style:line_style_night}className="line" />

            <div onClick={props.about_me_function} className="list">
                <p style={toggle? (about_me ?standard_font_night_theme:standard_night_theme):(about_me ?standard_font_day_theme:standard_day_theme)} className="intropara" > {ABOUT_ME}</p>
            </div>
            <div onClick={props.achievements_function} className="list">
                <p style={toggle? (achievements ?standard_font_night_theme:standard_night_theme):(achievements ?standard_font_day_theme:standard_day_theme)} className="intropara" > {ACHIEVEMENT}</p>
            </div>
            <div onClick={props.blogs_function} className="list">
                <p style={toggle? (blogs ?standard_font_night_theme:standard_night_theme):(blogs ?standard_font_day_theme:standard_day_theme)} className="intropara" > {BLOGS}</p>
            </div>
           
            <div onClick={props.projects_function} className="list">
                <p style={toggle? (projects?standard_font_night_theme:standard_night_theme):(projects?standard_font_day_theme:standard_day_theme)} className="intropara"> {PROJECTS}</p>
            </div>
            <div className="toggle_button list">
                <label className="switch">
                    <input onChange={props.toggle_function} type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}

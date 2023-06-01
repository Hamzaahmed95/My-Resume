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
import { PROJECTS, line_style_night, line_style, standard_day_theme, standard_font_day_theme, standard_font_night_theme, standard_night_theme, ABOUT_ME, ACHIEVEMENT, BLOGS, LINKEDIN_URL, MEDIUM_URL, GITHUB_URL, TWITTER_URL } from '../../utils/Constants.js'
import 'typeface-merriweather'

export const Sidebar = (props) => {
    const {
        aboutMe,
        achievements,
        blogs, toggle,
        projects,
        handleChangeAboutMe,
        handleChangeAchievements,
        handleChangeBlogs,
        handleChangeToggle,
        handleChangeProjects
    } = props

    return (

        <div align="center" className="AboutMe">
            <img className="profile_picture" src={Profile} width="200" height="250" />
            <div className="icons">
                <a href={TWITTER_URL} >
                    <img className="each_icon" src={toggle ? Twitter : TwitterLight} />
                </a>
                <a href={GITHUB_URL} >
                    <img className="each_icon" src={toggle ? Github : GithubLight} />
                </a>
                <a href={LINKEDIN_URL} >
                    <img className="each_icon" src={toggle ? LinkedIn : LinkedInLight} />
                </a>
                <a href={MEDIUM_URL} >
                    <img className="each_icon" src={toggle ? Medium : MediumLight} />
                ƒ</a>
            </div>
            <hr style={toggle ? line_style : line_style_night} className="line" />
            <div onClick={handleChangeAboutMe} className="list">
                <p style={toggle ? (aboutMe ? standard_font_night_theme : standard_night_theme) : (aboutMe ? standard_font_day_theme : standard_day_theme)} className="intropara" > {ABOUT_ME}</p>
            </div>
            <div onClick={handleChangeAchievements} className="list">
                <p style={toggle ? (achievements ? standard_font_night_theme : standard_night_theme) : (achievements ? standard_font_day_theme : standard_day_theme)} className="intropara" > {ACHIEVEMENT}</p>
            </div>
            <div onClick={handleChangeBlogs} className="list">
                <p style={toggle ? (blogs ? standard_font_night_theme : standard_night_theme) : (blogs ? standard_font_day_theme : standard_day_theme)} className="intropara" > {BLOGS}</p>
            </div>

            <div onClick={handleChangeProjects} className="list">
                <p style={toggle ? (projects ? standard_font_night_theme : standard_night_theme) : (projects ? standard_font_day_theme : standard_day_theme)} className="intropara"> {PROJECTS}</p>
            </div>
            <div className="toggle_button list">
                <label className="switch">
                    <input onChange={handleChangeToggle} type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}

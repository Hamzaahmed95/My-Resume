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
        activeBar,
        toggle,
        handleChangeActiveBar,
        handleChangeToggle,
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
                </a>
            </div>
            <hr style={toggle ? line_style : line_style_night} className="line" />
            <div onClick={() => handleChangeActiveBar("aboutMe")} className="list">
                <p style={toggle ? (activeBar == "aboutMe" ? standard_font_night_theme : standard_night_theme) : (activeBar == "aboutMe" ? standard_font_day_theme : standard_day_theme)} className="intropara" > {ABOUT_ME}</p>
            </div>
            <div onClick={() => handleChangeActiveBar("achievements")} className="list">
                <p style={toggle ? (activeBar == "achievements" ? standard_font_night_theme : standard_night_theme) : (activeBar == "achievements" ? standard_font_day_theme : standard_day_theme)} className="intropara" > {ACHIEVEMENT}</p>
            </div>
            <div onClick={() => handleChangeActiveBar("blogs")} className="list">
                <p style={toggle ? (activeBar == "blogs" ? standard_font_night_theme : standard_night_theme) : (activeBar == "blogs" ? standard_font_day_theme : standard_day_theme)} className="intropara" > {BLOGS}</p>
            </div>

            <div onClick={() => handleChangeActiveBar("projects")} className="list">
                <p style={toggle ? (activeBar == "projects" ? standard_font_night_theme : standard_night_theme) : (activeBar == "projects" ? standard_font_day_theme : standard_day_theme)} className="intropara"> {PROJECTS}</p>
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

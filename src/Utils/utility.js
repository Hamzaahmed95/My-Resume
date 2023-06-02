
import React from 'react'
import Github from '../images/night/github.png'
import Twitter from '../images/night/twitter.png'
import LinkedIn from '../images/night/linkedin.png'
import Medium from '../images/night/medium.png'
import GithubLight from '../images/day/github.png'
import TwitterLight from '../images/day/twitter.png'
import LinkedInLight from '../images/day/linkedin.png'
import MediumLight from '../images/day/medium.png'
import Profile from '../images/profile.jpg'
import { ABOUT_ME, ACHIEVEMENT, BLOGS, PROJECTS, LINKEDIN_URL, MEDIUM_URL, GITHUB_URL, TWITTER_URL, standard_day_theme, standard_font_day_theme, standard_font_night_theme, standard_night_theme } from './Constants'

const icons = [{ name: { dark: Twitter, light: TwitterLight }, url: TWITTER_URL }, { name: { dark: Github, light: GithubLight }, url: GITHUB_URL }, { name: { dark: LinkedIn, light: LinkedInLight }, url: LINKEDIN_URL }, { name: { dark: Medium, light: MediumLight }, url: MEDIUM_URL }]
const sections = [{ name: "aboutMe", text: ABOUT_ME }, { name: "achievements", text: ACHIEVEMENT }, { name: "blogs", text: BLOGS }, { name: "projects", text: PROJECTS }]

export const DisplayIcons = ({ toggle }) => (
  <div className="icons">
    {icons.map((icon, index) => (
      <a key={index} href={icon.url} >
        <img className="each_icon" src={toggle ? icon.name.dark : icon.name.light} />
      </a>
    ))}
  </div>
)

export const DisplayProfilePicture = () => (
  <img className="profile_picture" src={Profile} width="200" height="250" />
)

export const DisplaySections = ({ toggle, handleChangeActiveBar, activeBar }) => (
  sections.map((section, index) => (
    <div key={index} onClick={() => handleChangeActiveBar(section.name)} className="list">
      <p style={toggle ? (activeBar == section.name ? standard_font_night_theme : standard_night_theme) : (activeBar == section.name ? standard_font_day_theme : standard_day_theme)} className="intropara" > {section.text}</p>
    </div>
  ))
)

export const ToggleButton = ({ handleChangeToggle }) => (
  <div className="toggle_button list">
    <label className="switch">
      <input onChange={handleChangeToggle} type="checkbox" />
      <span className="slider round"></span>
    </label>
  </div>
)
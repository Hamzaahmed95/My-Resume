import React, { Component, useState } from 'react';

import './App.css';
import { Sidebar } from '../Sidebar/Sidebar'
import { MainComponent } from '../MainComponent/MainComponent'
import { sidebar_background_dark, sidebar_background_light, main_component_background_dark, main_component_background_light } from '../../utils/styles'

const App = () => {
  const [aboutMe, setAboutMe] = useState(true)
  const [achievements, setAchievements] = useState(false)
  const [blogs, setBlogs] = useState(false)
  const [project, setProject] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [projects, setProjects] = useState(false)

  const handleChangeAboutMe = () => {
    setAboutMe(true)
    setAchievements(false)
    setBlogs(false)
    setProjects(false)
  }
  const handleChangeAchievements = () => {
    setAboutMe(false)
    setAchievements(true)
    setBlogs(false)
    setProjects(false)
  }

  const handleChangeBlogs = () => {
    setAboutMe(false)
    setAchievements(false)
    setBlogs(true)
    setProjects(false)
  }

  const handleChangeProjects = () => {
    setAboutMe(false)
    setAchievements(false)
    setBlogs(false)
    setProjects(true)

  }
  const handleChangeToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="app_container">
      <div style={toggle ? sidebar_background_dark : sidebar_background_light} className="sidebar_component">
        <Sidebar
          aboutMe={aboutMe}
          blogs={blogs}
          achievements={achievements}
          toggle={toggle}
          projects={projects}
          handleChangeAboutMe={handleChangeAboutMe}
          handleChangeAchievements={handleChangeAchievements}
          handleChangeBlogs={handleChangeBlogs}
          handleChangeToggle={handleChangeToggle}
          handleChangeProjects={handleChangeProjects} /></div>
      <div style={toggle ? main_component_background_dark : main_component_background_light} className="main_component">
        <MainComponent
          aboutMe={aboutMe}
          blogs={blogs}
          achievements={achievements}
          toggle={toggle}
          projects={projects} /></div>
    </div>
  )

}
export default App;

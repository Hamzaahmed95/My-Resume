import React, { Component, useState } from 'react';

import './App.css';
import { Sidebar } from '../Sidebar/Sidebar'
import { MainComponent } from '../MainComponent/MainComponent'
import { sidebar_background_dark, sidebar_background_light, main_component_background_dark, main_component_background_light } from '../../utils/styles'

const App = () => {
  const [activeBar, setActiveBar] = useState("aboutMe")
  const [toggle, setToggle] = useState(false)

  const handleChangeActiveBar = (value) => {
    setActiveBar(value)
  }
  const handleChangeToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="app_container">
      <div style={toggle ? sidebar_background_dark : sidebar_background_light} className="sidebar_component">
        <Sidebar
          activeBar={activeBar}
          toggle={toggle}
          handleChangeActiveBar={handleChangeActiveBar}
          handleChangeToggle={handleChangeToggle} /></div>
      <div style={toggle ? main_component_background_dark : main_component_background_light} className="main_component">
        <MainComponent
          activeBar={activeBar}
          toggle={toggle} />
      </div>
    </div>
  )

}
export default App;

import React, { Component } from 'react';

import './App.css';
import { Sidebar } from '../Sidebar/Sidebar'
import { MainComponent } from '../MainComponent/MainComponent'
import {sidebar_background_dark,sidebar_background_light,main_component_background_dark,main_component_background_light} from '../../Utils/styles'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      about_me: true,
      achievements: false,
      blogs: false,
      events: false,
      project:false,
      toggle: false,
      projects: false,
    }
    this.handleChangeAboutMe = this.handleChangeAboutMe.bind(this)
    this.handleChangeAchievements = this.handleChangeAchievements.bind(this)
    this.handleChangeBlogs = this.handleChangeBlogs.bind(this)
    this.handleChangeEvents = this.handleChangeEvents.bind(this)
    this.handleChangeToggle = this.handleChangeToggle.bind(this)
    this.handleChangeProjects = this.handleChangeProjects.bind(this)

  }

  handleChangeAboutMe() {
    this.setState({
      achievements: false,
      about_me: true,
      blogs: false,
      events: false,
      projects:false
    })
  }
  handleChangeAchievements() {
    this.setState({
      achievements: true,
      about_me: false,
      blogs: false,
      events: false,
      projects:false
    })
  }
  handleChangeBlogs() {
    this.setState({
      achievements: false,
      about_me: false,
      blogs: true,
      events: false,
      projects:false
    })
  }

  handleChangeEvents() {
    this.setState({
      achievements: false,
      about_me: false,
      blogs: false,
      events: true,
      projects:false
    })
  }
  handleChangeProjects() {
    this.setState({
      achievements: false,
      about_me: false,
      blogs: false,
      events: false,
      projects:true,
    })
  }
  handleChangeToggle() {
    this.setState({ toggle: !this.state.toggle })
  }
 


  render() {
    return (
      <div className="container1">
        
        <div style={this.state.toggle? sidebar_background_dark: sidebar_background_light} className="AboutMe"><Sidebar about_me1={this.state.about_me} blogs1={this.state.blogs} achievements1={this.state.achievements}  events1={this.state.events} toggle1={this.state.toggle} projects1={this.state.projects} about_me={this.handleChangeAboutMe} achievements={this.handleChangeAchievements} blogs={this.handleChangeBlogs} events={this.handleChangeEvents} toggle={this.handleChangeToggle} projects={this.handleChangeProjects} /></div>
        <div style={this.state.toggle? main_component_background_dark:main_component_background_light} className="Intro"><MainComponent about_me={this.state.about_me} blogs={this.state.blogs} achievements={this.state.achievements}  events={this.state.events} toggle={this.state.toggle} projects={this.state.projects}/></div>
      </div>
    );
  }
}

export default App;

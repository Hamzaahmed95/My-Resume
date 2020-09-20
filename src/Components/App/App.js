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
      youtube: false,
      events: false,
      project:false,
      toggle: false,
      projects: false,
    }
    this.handleChangeToggle = this.handleChangeToggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

 
  handleClick(arg){
    this.setState({
      achievements: false,
      about_me: false,
      blogs: false,
      youtube: false,
      events: false,
      projects:false,
    })
  
    if(arg=='achievements'){
      this.setState({
        achievements: true,
      })
    }
    if(arg=='about_me'){
      this.setState({
        about_me: true,
      })
    }
    if(arg=='blogs'){
      this.setState({
        blogs: true,
      })
    }
    if(arg=='youtube'){
      this.setState({
        youtube: true,
      })
    }
    if(arg=='events'){
      this.setState({
        events: true,
      })
    }
    if(arg=='projects'){
      this.setState({
        projects: true,
      })
    }
  }
  handleChangeToggle() {
    this.setState({ toggle: !this.state.toggle })
  }
 
  render() {
    return (
      <div className="container1">
        <div style={this.state.toggle? sidebar_background_dark: sidebar_background_light} className="AboutMe"><Sidebar about_me1={this.state.about_me} blogs1={this.state.blogs} achievements1={this.state.achievements} youtube1={this.state.youtube} events1={this.state.events} toggle1={this.state.toggle} projects1={this.state.projects} about_me={this.handleChangeAboutMe} achievements={this.handleChangeAchievements} blogs={this.handleChangeBlogs} youtube={this.handleChangeYoutube} events={this.handleChangeEvents} toggle={this.handleChangeToggle} projects={this.handleChangeProjects} status={this.handleClick} /></div>
        <div style={this.state.toggle? main_component_background_dark:main_component_background_light} className="Intro"><MainComponent about_me={this.state.about_me} blogs={this.state.blogs} achievements={this.state.achievements} youtube={this.state.youtube} events={this.state.events} toggle={this.state.toggle} projects={this.state.projects}/></div>
      </div>
    );
  }
}

export default App;

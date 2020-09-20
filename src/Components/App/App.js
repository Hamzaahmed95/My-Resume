import React, { Component } from 'react';

import './App.css';
import { Sidebar } from '../Sidebar/Sidebar'
import { MainComponent } from '../MainComponent/MainComponent'

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
      style: {
        background: '#282D35',
        borderRight: '1px solid white',
        color: '#e9e9e9'
      },
      style2: {
        background: '#282D35',
        color: '#e9e9e9'
      }
    }
    this.handleChangeAboutMe = this.handleChangeAboutMe.bind(this)
    this.handleChangeAchievements = this.handleChangeAchievements.bind(this)
    this.handleChangeBlogs = this.handleChangeBlogs.bind(this)
    this.handleChangeYoutube = this.handleChangeYoutube.bind(this)
    this.handleChangeEvents = this.handleChangeEvents.bind(this)
    this.handleChangeToggle = this.handleChangeToggle.bind(this)
    this.handleChangeProjects = this.handleChangeProjects.bind(this)

  }


  handleChangeAboutMe() {
    this.setState({
      achievements: false,
      about_me: true,
      blogs: false,
      youtube: false,
      events: false,
      projects:false
    })
  }
  handleChangeAchievements() {
    this.setState({
      achievements: true,
      about_me: false,
      blogs: false,
      youtube: false,
      events: false,
      projects:false
    })
  }
  handleChangeBlogs() {
    this.setState({
      achievements: false,
      about_me: false,
      youtube: false,
      blogs: true,
      events: false,
      projects:false
    })
  }
  handleChangeYoutube() {
    this.setState({
      achievements: false,
      about_me: false,
      blogs: false,
      youtube: true,
      events: false,
      projects:false
    })
  }
  handleChangeEvents() {
    this.setState({
      achievements: false,
      about_me: false,
      blogs: false,
      youtube: false,
      events: true,
      projects:false
    })
  }
  handleChangeProjects() {
    this.setState({
      achievements: false,
      about_me: false,
      blogs: false,
      youtube: false,
      events: false,
      projects:true,
    })
  }
  handleChangeToggle() {
    if (this.state.toggle) {

      this.setState({
        style: {
          ...this.state.style,
          background: '#282D35',
          borderRight: '1px solid grey',
          color: '#e9e9e9'
        },
        style2: {
          ...this.state.style2,
          background: '#282D35',
          color: '#e9e9e9'
        }
      })
    } else {

      this.setState({
        style: {
          ...this.state.style,
          background: '#ffffff',
          borderRight: '1px solid grey',
          color: '#000000'
        },
        style2: {
          ...this.state.style2,
          background: '#ffffff',
          color: '#000000'
        }
      })
    }
    this.setState({ toggle: !this.state.toggle })
  }
 


  render() {
    return (
      <div className="container1">
        <div style={this.state.style} className="AboutMe"><Sidebar about_me1={this.state.about_me} blogs1={this.state.blogs} achievements1={this.state.achievements} youtube1={this.state.youtube} events1={this.state.events} toggle1={this.state.toggle} projects1={this.state.projects} about_me={this.handleChangeAboutMe} achievements={this.handleChangeAchievements} blogs={this.handleChangeBlogs} youtube={this.handleChangeYoutube} events={this.handleChangeEvents} toggle={this.handleChangeToggle} projects={this.handleChangeProjects} /></div>
        <div style={this.state.style2} className="Intro"><MainComponent about_me={this.state.about_me} blogs={this.state.blogs} achievements={this.state.achievements} youtube={this.state.youtube} events={this.state.events} toggle={this.state.toggle} projects={this.state.projects}/></div>
      </div>
    );
  }
}

export default App;

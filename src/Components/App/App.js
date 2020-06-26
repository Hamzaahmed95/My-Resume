import React, { Component } from 'react';

import './App.css';
import { AboutMe } from '../AboutMe/AboutMe'
import { Intro } from '../Introduction/Intro'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: true,
      achievements: false,
      blogs: false,
      youtube: false,
      events: false,
      toggle: false,
      style: {
        background: '#373D49',
        color: '#e9e9e9'
      },
      style2: {
        background: '#282D35',
        color: '#e9e9e9'
      }
    }
    this.handleChangeProjects = this.handleChangeProjects.bind(this)
    this.handleChangeAchievements = this.handleChangeAchievements.bind(this)
    this.handleChangeBlogs = this.handleChangeBlogs.bind(this)
    this.handleChangeYoutube = this.handleChangeYoutube.bind(this)
    this.handleChangeEvents = this.handleChangeEvents.bind(this)
    this.handleChangeToggle = this.handleChangeToggle.bind(this)

  }


  handleChangeProjects() {
    this.setState({
      achievements: false,
      projects: true,
      blogs: false,
      youtube: false,
      events: false
    })
  }
  handleChangeAchievements() {
    this.setState({
      achievements: true,
      projects: false,
      blogs: false,
      youtube: false,
      events: false
    })
  }
  handleChangeBlogs() {
    this.setState({
      achievements: false,
      projects: false,
      youtube: false,
      blogs: true,
      events: false
    })
  }
  handleChangeYoutube() {
    this.setState({
      achievements: false,
      projects: false,
      blogs: false,
      youtube: true,
      events: false
    })
  }
  handleChangeToggle() {
    if (this.state.toggle) {

      this.setState({
        style: {
          ...this.state.style,
          background: '#1D2632',
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
          background: '#dfdfdf',
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
  handleChangeEvents() {
    this.setState({
      achievements: false,
      projects: false,
      blogs: false,
      youtube: false,
      events: true
    })
  }


  render() {
    console.log("hamza: " + this.state.style)
    return (
      <div className="container1">
        <div style={this.state.style} className="AboutMe"><AboutMe projects1={this.state.projects} blogs1={this.state.blogs} achievements1={this.state.achievements} youtube1={this.state.youtube} events1={this.state.events} toggle1={this.state.toggle} projects={this.handleChangeProjects} achievements={this.handleChangeAchievements} blogs={this.handleChangeBlogs} youtube={this.handleChangeYoutube} events={this.handleChangeEvents} toggle={this.handleChangeToggle} /></div>
        <div style={this.state.style2} className="Intro"><Intro projects={this.state.projects} blogs={this.state.blogs} achievements={this.state.achievements} youtube={this.state.youtube} events={this.state.events} toggle={this.state.toggle} /></div>
      </div>
    );
  }
}

export default App;

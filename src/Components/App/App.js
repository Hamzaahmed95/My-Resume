import React,{Component} from 'react';

import './App.css';
import { AboutMe } from '../AboutMe/AboutMe'
import { Intro } from '../Introduction/Intro'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      projects:true,
      achievements:false,
      blogs:false,
      youtube:false
    }
    this.handleChangeProjects = this.handleChangeProjects.bind(this)
    this.handleChangeAchievements = this.handleChangeAchievements.bind(this)
    this.handleChangeBlogs = this.handleChangeBlogs.bind(this)
    this.handleChangeYoutube = this.handleChangeYoutube.bind(this)
  }

  handleChangeProjects(){
    this.setState({
      achievements:false,
      projects:true,
      blogs:false,
      youtube:false
    })
  }
  handleChangeAchievements(){
    this.setState({
      achievements:true,
      projects:false,
      blogs:false,
      youtube:false
    })
  }
  handleChangeBlogs(){
    this.setState({
      achievements:false,
      projects:false,
      youtube:false,
      blogs:true
    })
  }
  handleChangeYoutube(){
    this.setState({
      achievements:false,
      projects:false,
      blogs:false,
      youtube:true,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="AboutMe"><AboutMe projects1={this.state.projects} blogs1={this.state.blogs}  achievements1={this.state.achievements} youtube1={this.state.youtube} projects={this.handleChangeProjects} achievements={this.handleChangeAchievements} blogs={this.handleChangeBlogs} youtube={this.handleChangeYoutube}/></div>
        <div className="Intro"><Intro projects={this.state.projects} blogs={this.state.blogs}  achievements={this.state.achievements} youtube={this.state.youtube}/></div>
      </div>
    );
  }
}

export default App;

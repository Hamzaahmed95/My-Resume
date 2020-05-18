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
    }
    this.handleChangeProjects = this.handleChangeProjects.bind(this)
    this.handleChangeAchievements = this.handleChangeAchievements.bind(this)
    this.handleChangeBlogs = this.handleChangeBlogs.bind(this)
  }

  handleChangeProjects(){
    this.setState({
      achievements:false,
      projects:true,
      blogs:false
    })
  }
  handleChangeAchievements(){
    this.setState({
      achievements:true,
      projects:false,
      blogs:false
    })
  }
  handleChangeBlogs(){
    this.setState({
      achievements:false,
      projects:false,
      blogs:true
    })
  }

  render() {
    return (
      <div className="container">
        <div className="AboutMe"><AboutMe projects={this.handleChangeProjects} achievements={this.handleChangeAchievements} blogs={this.handleChangeBlogs}/></div>
        <div className="Intro"><Intro projects={this.state.projects} blogs={this.state.blogs}  achievements={this.state.achievements}/></div>
      </div>
    );
  }
}

export default App;

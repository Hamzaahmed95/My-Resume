import React from 'react'
import './Projects.css'
import 'typeface-montserrat'
import 'typeface-merriweather'
import { mobile_projects_day,mobile_projects_night,web_projects_day,web_projects_night,heading_style_day,heading_style_night,subgraph_style_day,subgraph_style_night } from '../../../Utils/Constants'

import mobile_projects from '../../../DummyData/mobile_projects.json'
import web_projects from '../../../DummyData/web_projects.json'

export const Projects = (props) => {
    const toggle = props.toggle

    const mobile_data = mobile_projects
    const web_data = web_projects
    return (
        <div className="Projects">

            <div className="v2"><h1 style={toggle?heading_style_day:heading_style_night} >My Projects</h1></div>

            <div className="container">
                <div style = {toggle?mobile_projects_day:mobile_projects_night} className="child">
                    <h3 align="center"> MOBILE DEVELOPMENT</h3>
                    <div className="mobile">
                        {mobile_data.data.map(datas => {
                            return (
                                <div className="eventPieces">
                                    <div className="event1">
                                        <div className="v2"><h1 style={toggle?heading_style_day:heading_style_night} className="name2">{datas.name}</h1></div>
                                        <p className= "sub_style" style={toggle?subgraph_style_day:subgraph_style_night} >{datas.details}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div  style = {toggle?web_projects_day:web_projects_night} className="child">
                    <h3 align="center"> WEB DEVELOPMENT</h3>
                    <div className="web">
                        {web_data.data.map(datas => {
                            return (
                                <div className="eventPieces">
                                    <div className="event1">
                                        <div className="v2"><h1 style={toggle?heading_style_day:heading_style_night} className="name2">{datas.name}</h1></div>
                                        <p className= "sub_style" style={toggle?subgraph_style_day:subgraph_style_night}>{datas.details}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

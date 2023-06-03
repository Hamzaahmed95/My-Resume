import React, { useContext } from 'react'
import './Projects.css'
import { mobile_projects_day, mobile_projects_night, web_projects_day, web_projects_night, heading_style_day, heading_style_night, subgraph_style_day, subgraph_style_night } from '../../../utils/Constants'
import 'typeface-montserrat'
import 'typeface-merriweather'
import mobile_projects from '../../../mockData/mobile_projects.json'
import web_projects from '../../../mockData/web_projects.json'
import { ThemeContext } from '../../App/App'

export const Projects = () => {

    const theme = useContext(ThemeContext)

    const mobile_data = mobile_projects
    const web_data = web_projects
    return (
        <div className="Projects">

            <div className="v2"><h1 style={theme.theme === "dark" ? heading_style_day : heading_style_night} >My Projects</h1></div>

            <div className="container">
                <div style={theme.theme === "dark" ? mobile_projects_day : mobile_projects_night} className="child">
                    <h3 align="center"> MOBILE DEVELOPMENT</h3>
                    <div className="mobile">
                        {mobile_data.data.map((datas, index) => {
                            return (
                                <div key={index} className="eventPieces">
                                    <div className="event1">
                                        <div className="v2"><h1 style={theme.theme === "dark" ? heading_style_day : heading_style_night} className="name2">{datas.name}</h1></div>
                                        <p className="sub_style" style={theme.theme === "dark" ? subgraph_style_day : subgraph_style_night} >{datas.details}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div style={theme.theme === "dark" ? web_projects_day : web_projects_night} className="child">
                    <h3 align="center"> WEB DEVELOPMENT</h3>
                    <div className="web">
                        {web_data.data.map((datas, index) => {
                            return (
                                <div key={index} className="eventPieces">
                                    <div className="event1">
                                        <div className="v2"><h1 style={theme.theme === "dark" ? heading_style_day : heading_style_night} className="name2">{datas.name}</h1></div>
                                        <p className="sub_style" style={theme.theme === "dark" ? subgraph_style_day : subgraph_style_night}>{datas.details}</p>
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

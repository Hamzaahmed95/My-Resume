import React from 'react'
import './Projects.css'
import 'typeface-montserrat'
import 'typeface-merriweather'
import { Event_Main_Heading, Blog_1_URL, Blog_2_URL, Blog_3_URL, Blog_4_URL, Blog_5_URL, Event_1_Heading, Event_2_Heading, Event_3_Heading, Event_4_Heading, Blog_4_Heading, Blog_5_Heading } from '../../../Utils/Constants'

import mobile_projects from '../../../DummyData/mobile_projects.json'
import web_projects from '../../../DummyData/web_projects.json'

export const Projects = (props) => {
    const toggle = props.toggle

    const mobile_data = mobile_projects
    const web_data = web_projects
    let subgraphStyle = {
        color: '#ffffff',
        fontFamily: 'Merriweather, Georgia, serif',
        fontSize: '16',
        fontWeight: '400'
    }
    let first_child = {
        backgroundColor: '#363D48'
    }
    let second_child = {
        backgroundColor: '#282D35'
    }
    let name2Style = {
        color: '#ffffff',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '900'
    }
    if (toggle) {

        subgraphStyle = {
            color: '#000000',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '16',
            fontWeight: '40'
        }
        name2Style = {
            color: '#D33668',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
        first_child = {
            backgroundColor: '#FDFAE0',
            color: '#000000'
        }
        second_child = {
            color: '#000000',
            backgroundColor: '#ffffff'
        }
    } else {
        subgraphStyle = {
            color: '#ffffff',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '16',
            fontWeight: '40'
        }
        name2Style = {
            color: '#FFA7C3',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
        first_child = {
            backgroundColor: '#363D48',
            color: '#ffffff'
        }
        second_child = {
            backgroundColor: '#282D35',
            color: '#ffffff'
        }

    }
    return (
        <div className="Projects">

            <div className="v2"><h1 style={name2Style} >My Projects</h1></div>

            <div className="container">
                <div style = {first_child} className="child">
                    <h3 align="center"> MOBILE DEVELOPMENT</h3>
                    <div className="mobile">
                        {mobile_data.data.map(datas => {
                            return (
                                <div className="eventPieces">
                                    <div className="event1">
                                        <div className="v2"><h1 style={name2Style} className="name2">{datas.name}</h1></div>
                                        <p className= "sub_style" style={subgraphStyle} >{datas.details}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div  style = {second_child} className="child">
                    <h3 align="center"> WEB DEVELOPMENT</h3>
                    <div className="web">
                        {web_data.data.map(datas => {
                            return (
                                <div className="eventPieces">
                                    <div className="event1">
                                        <div className="v2"><h1 style={name2Style} className="name2">{datas.name}</h1></div>
                                        <p className= "sub_style" style={subgraphStyle}>{datas.details}</p>
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

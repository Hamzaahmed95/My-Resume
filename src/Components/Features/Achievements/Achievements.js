import React from 'react'
import './Achievements.css'
import { block_background_day,block_background_night,heading_style_day,heading_style_night,subgraph_style_day,subgraph_style_night,Achievements_Main_Heading, Achievement_1_Content, Achievement_2_Content, Achievement_3_Content, Achievement_1_Heading, Achievement_2_Heading, Achievement_3_Heading, Blog_4_Heading, Blog_5_Heading } from '../../../Utils/Constants'
import Achievement1 from '../../../images/achievement1.jpeg'
import Achievement2 from '../../../images/achievement2.jpeg'
import Achievement3 from '../../../images/achievement3.jpeg'

export const Achievements = (props) => {

    const toggle = props.toggle

    return (
        <div className="Achievements">
            <div className="Achievementsheadings">
                <div className="v2"><h1 style={toggle? heading_style_day:heading_style_night}>{Achievements_Main_Heading}</h1></div>
            </div>
            <div className="achievementsPieces">
                <div align="left" style = {toggle? block_background_day:block_background_night} className="blog1">
                    <img src={Achievement1} />
                    <div>
                        <h2 style={toggle? heading_style_day:heading_style_night} >{Achievement_1_Heading}</h2>
                        <p className= "sub_style" style={toggle?subgraph_style_day:subgraph_style_night}>{Achievement_1_Content}</p>
                    </div>
                </div>
                
                <div align="left" style = {toggle? block_background_day:block_background_night}className="blog2">
                    <img src={Achievement2} />
                    <div>
                        <h2 style={toggle? heading_style_day:heading_style_night} >{Achievement_2_Heading}</h2>
                        <p className= "sub_style" style={toggle?subgraph_style_day:subgraph_style_night}>{Achievement_2_Content}</p>
                    </div>
                </div>
                <div align="left" style = {toggle? block_background_day:block_background_night} className="blog3">
                    <img src={Achievement3} />
                    <div>
                        <h2 style={toggle? heading_style_day:heading_style_night} >{Achievement_3_Heading}</h2>
                        <p sclassName= "sub_style" tyle={toggle?subgraph_style_day:subgraph_style_night}>{Achievement_3_Content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

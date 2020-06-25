import React from 'react'
import './Achievements.css'
import { Achievements_Main_Heading, Blog_1_URL, Blog_2_URL, Blog_3_URL, Achievement_1_Heading, Achievement_2_Heading, Achievement_3_Heading, Blog_4_Heading, Blog_5_Heading } from '../../Utils/Constants.js'
import Achievement1 from '../../images/achievement1.jpeg'
import Achievement2 from '../../images/achievement2.jpeg'
import Achievement3 from '../../images/achievement3.jpeg'

export const Achievements = () => {
    return (
        <div className="Achievements">
             <div className="Achievementsheadings">
                <div className="v1"></div>
                <div className="v2"><h1 className="name2">{Achievements_Main_Heading}</h1></div>
            </div>
            <div className="achievementsPieces">
                <div align="center" className="blog1">
                    <img src={Achievement1} />
                    <p className="achievement_headings">{Achievement_1_Heading}</p>
                </div>
                <div align="center" className="blog2">
                    <img src={Achievement2} />
                    <p className="blog_headings">{Achievement_2_Heading}</p>
                </div>
                <div align="center" className="blog3">
                    <img src={Achievement3} />
                    <p className="blog_headings">{Achievement_3_Heading}</p>
                </div>
            </div>
        </div>
    )
}

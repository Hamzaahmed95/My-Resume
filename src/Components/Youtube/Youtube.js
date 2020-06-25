import React from 'react'
import './Youtube.css'
import { Youtube_Main_Heading, video1_link, video2_link, Blog_3_URL, Video_1_Heading, Video_2_Heading, Achievement_3_Heading, Blog_4_Heading, Blog_5_Heading } from '../../Utils/Constants.js'
import Video1 from '../../images/disrupt.jpg'
import Video2 from '../../images/Ilmi_shaoor.png'
import Achievement3 from '../../images/achievement3.jpeg'

export const Youtube = () => {
    return (
        <div className="Youtube">
            <div className="Youtubesheadings">
                <div className="v1"></div>
                <div className="v2"><h1 className="name2">{Youtube_Main_Heading}</h1></div>
            </div>

            <div className="youtubePieces">
                <div align="center" className="blog1">
                    <a target="blank" href={video1_link} >
                        <img src={Video1} />
                        <p className="achievement_headings">{Video_1_Heading}</p>
                    </a>
                </div>
                <div align="center" className="blog2">
                    <a target="blank" href={video2_link} >
                        <img src={Video2} />
                        <p className="blog_headings">{Video_2_Heading}</p>
                    </a>

                </div>
            </div>
        </div>
    )
}

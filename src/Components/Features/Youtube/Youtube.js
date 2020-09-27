import React from 'react'
import './Youtube.css'
import { Youtube_Main_Heading, video1_link, video2_link, Blog_3_URL, Video_1_Heading, Video_2_Heading, Achievement_3_Heading, Blog_4_Heading, Blog_5_Heading } from '../../../Utils/Constants'
import Video1 from '../../../images/disrupt.jpg'
import Video2 from '../../../images/Ilmi_shaoor.png'

export const Youtube = (props) => {

    const toggle = props.toggle

    let name2Style = {
        color:'#ffffff',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight:'900'
    }
    let subgraphStyle = {
        color: '#FFA7C3',
        fontFamily: 'Merriweather, Georgia, serif',
        fontSize: '10',
        fontWeight: '40',
        borderBottom: '1px solid #FFA7C3',
        marginLeft: '30px',
        marginRight: '30px'
    }
    if(toggle){
      
        name2Style = {
            color:'#D33668',
            fontFamily:'Montserrat, sans-serif',
            fontWeight:'900'
        }
        subgraphStyle = {
            color: '#D33668',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '10',
            fontWeight: '40',
            borderBottom: '1px solid #D33668',
            marginLeft: '30px',
            marginRight: '30px'
        }
    }else{
        name2Style = {
            color:'#FFA7C3',
            fontFamily:'Montserrat, sans-serif',
            fontWeight:'900'
        }
        subgraphStyle = {
            color: '#FFA7C3',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '10',
            fontWeight: '40',
            borderBottom: '1px solid #FFA7C3',
            marginLeft: '50px',
            marginRight: '50px'
        }
    }
    return (
        <div className="Youtube">
            <div className="Youtubesheadings">
                <div className="v2"><h1 style={name2Style} className="name2">{Youtube_Main_Heading}</h1></div>
            </div>

            <div className="youtubePieces">
                <div align="center" className="blog1">
                    <a target="blank" href={video1_link} >
                        <img src={Video1} />
                        <p style={subgraphStyle} className="achievement_headings">{Video_1_Heading}</p>
                    </a>
                </div>
                <div align="center" className="blog2">
                    <a target="blank" href={video2_link} >
                        <img src={Video2} />
                        <p style={subgraphStyle} className="blog_headings">{Video_2_Heading}</p>
                    </a>

                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './Projects.css'
import 'typeface-montserrat'
import 'typeface-merriweather'
import { details,details_2 } from '../../Utils/Constants'

export const Projects = (props) => {
    const toggle = props.toggle
    let subgraphStyle = {
        color:'#ffffff',
        fontFamily:'Merriweather, Georgia, serif',
        fontSize:'16',
        fontWeight:'40'
    }
    let name2Style = {
        color:'#ffffff',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight:'900'
    }
    if(toggle){
        
        subgraphStyle = {
            color:'#000000',
            fontFamily:'Merriweather, Georgia, serif',
            fontSize:'16',
            fontWeight:'40'
        }
        name2Style = {
            color:'#FFA7C3',
            fontFamily:'Montserrat, sans-serif',
            fontWeight:'900'
        }
    }else{
        subgraphStyle = {
            color:'#ffffff',
            fontFamily:'Merriweather, Georgia, serif',
            fontSize:'16',
            fontWeight:'40'
        }
        name2Style = {
            color:'#FFA7C3',
            fontFamily:'Montserrat, sans-serif',
            fontWeight:'900'
        }
    }
    return (
        <div className="Projects">
            <div className="Projectsheadings">
                <div className="v1"></div>
                <div className="v2"><h1 style={name2Style} className="name2">What I do</h1></div>
            </div>
            <p style={subgraphStyle} className="subgraph">{details} {details_2}</p>
        </div>
    )
}

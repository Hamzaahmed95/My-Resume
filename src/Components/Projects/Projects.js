import React from 'react'
import './Projects.css'
import 'typeface-montserrat'
import 'typeface-merriweather'
import { details,details_2 } from '../../Utils/Constants'
import projects_data from '../../DummyData/projects_data.json'

export const Projects = (props) => {
    const toggle = props.toggle

    const data = projects_data
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
            color:'#D33668',
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
          <div className="v2"><h1 style={name2Style} className="name2">My Projects</h1></div>
          {data.data.map(datas =>{
            return <div>{datas.name}</div>
          })}
        </div>
    )
}

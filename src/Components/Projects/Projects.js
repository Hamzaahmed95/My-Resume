import React from 'react'
import './Projects.css'
import { details,details_2 } from '../../Utils/Constants'

export const Projects = () => {
    return (
        <div className="Projects">
            <div className="Projectsheadings">
                <div className="v1"></div>
                <div className="v2"><h1 className="name2">WHAT I DO</h1></div>
            </div>
            <h3 className="subgraph">{details} {details_2}</h3>
        </div>
    )
}

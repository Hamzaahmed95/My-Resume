import React from 'react'
import './Projects.css'
import { details,details_2 } from '../../Utils/Constants'

export const Projects = () => {
    return (
        <div className="Projects">
            <div className="Projectsheadings">
                <div className="v1"></div>
                <div className="v2"><h1 className="name2">What I do</h1></div>
            </div>
            <p className="subgraph">{details} {details_2}</p>
        </div>
    )
}

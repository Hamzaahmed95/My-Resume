import React from 'react'
import { projects, PROJECTS } from '../../../../utils/constants'

import { useThemeContext } from '../../../../hooks/useThemeContext'

export const Projects = () => {

    const theme = useThemeContext()

    return (
        <div className='achievements_container'>
            <h1 className={`about_me_heading_${theme.theme}`} >{PROJECTS}</h1>
            <div className="achievements_content" >
                {projects.map((project, index) => (
                    <div key={index} className={`block_background_${theme.theme} blog1`}>
                        <a target="blank" href={project.link} >
                            <img src={project.img_url} />
                        </a>
                        <div>
                            <h3 className={`about_me_heading_${theme.theme}`}>{project.name}</h3>
                            <p className={`about_me_content_${theme.theme}`}>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

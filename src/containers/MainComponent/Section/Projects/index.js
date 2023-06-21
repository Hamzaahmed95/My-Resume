import React from 'react'
import './index.css'
import { blogs } from '../../../../utils/constants'

import { useThemeContext } from '../../../../hooks/useThemeContext'

export const Projects = () => {

    const theme = useThemeContext()

    return (
        <div>
            <h1 className={`about_me_heading_${theme.theme}`} >My Projects</h1>
            <div className="blogPieces" >
                {blogs.map(blog => (
                    <div className={`block_background_${theme.theme} blog1`}>
                        <a target="blank" href={blog.link} >
                            <img src={blog.img_url} />
                        </a>
                        <div className="para_blogs">
                            <h2 className={`about_me_heading_${theme.theme}`}>{blog.name}</h2>
                            <p className={`about_me_content_${theme.theme}`}>{blog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

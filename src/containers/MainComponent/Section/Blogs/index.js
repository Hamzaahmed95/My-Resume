import React, { useContext } from 'react'
import './index.css'
import { blogs, block_background_day, block_background_night, heading_style_day, heading_style_night, subgraph_style_day, subgraph_style_night, Blog_1_Content, Blog_2_Content, Blog_3_Content, Blog_4_Content, Blog_5_Content, Blogs_Main_Heading, Blog_1_URL, Blog_2_URL, Blog_3_URL, Blog_4_URL, Blog_5_URL, Blog_1_Heading, Blog_2_Heading, Blog_3_Heading, Blog_4_Heading, Blog_5_Heading } from '../../../../utils/constants'

import { useThemeContext } from '../../../../hooks/useThemeContext'

export const Blogs = () => {

    const theme = useThemeContext()

    return (
        <div>
            <h1 className={`about_me_heading_${theme.theme}`} >{Blogs_Main_Heading}</h1>
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

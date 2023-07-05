import React, { useContext } from 'react'
import { blogs, Blogs_Main_Heading } from '../../../../utils/constants'

import { useThemeContext } from '../../../../hooks/useThemeContext'

export const Blogs = () => {

    const theme = useThemeContext()

    return (
        <div className='achievements_container'>
            <div className="section_heading" style={{ paddingBottom: "10px" }}>
                <h1 className={`about_me_heading_${theme.theme}`} >{Blogs_Main_Heading}</h1>
                <hr className={`line_general_${theme.theme} blogs`} />
            </div>
            <div className="achievements_content" >
                {blogs.map((blog, index) => (
                    <div key={index} className={`block_background_${theme.theme} blog1`}>
                        <a target="blank" href={blog.link} >
                            <img src={blog.img_url} />
                        </a>
                        <div>
                            <h3 className={`about_me_heading_${theme.theme}`}>{blog.name}</h3>
                            <p className={`about_me_content_${theme.theme}`}>{blog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

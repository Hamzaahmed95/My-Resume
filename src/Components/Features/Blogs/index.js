import React, { useContext } from 'react'
import './index.css'
import { block_background_day, block_background_night, heading_style_day, heading_style_night, subgraph_style_day, subgraph_style_night, Blog_1_Content, Blog_2_Content, Blog_3_Content, Blog_4_Content, Blog_5_Content, Blogs_Main_Heading, Blog_1_URL, Blog_2_URL, Blog_3_URL, Blog_4_URL, Blog_5_URL, Blog_1_Heading, Blog_2_Heading, Blog_3_Heading, Blog_4_Heading, Blog_5_Heading } from '../../../utils/constants'
import Blog1 from '../../../images/blog11.png'
import Blog2 from '../../../images/blog22.png'
import Blog3 from '../../../images/blog33.png'
import Blog4 from '../../../images/blog44.png'
import Blog5 from '../../../images/blog55.png'
import { useThemeContext } from '../../../hooks/useThemeContext'

export const Blogs = () => {

    const theme = useThemeContext()

    return (
        <div className="Blogs">
            <div className="Blogsheadings">
                <div className="v2"><h1 style={theme.theme === "dark" ? heading_style_day : heading_style_night} >{Blogs_Main_Heading}</h1></div>
            </div>
            <div className="blogPieces" >
                <div className="blog1" style={theme.theme === "dark" ? block_background_day : block_background_night}>
                    <a target="blank" href={Blog_1_URL} >
                        <img src={Blog1} />
                    </a>
                    <div className="para_blogs">
                        <h2 style={theme.theme === "dark" ? heading_style_day : heading_style_night} className="blog_headings">{Blog_1_Heading}</h2>
                        <p className="sub_style" style={theme.theme === "dark" ? subgraph_style_day : subgraph_style_night}>{Blog_1_Content}</p>
                    </div>

                </div>
                <div className="blog2" style={theme.theme === "dark" ? block_background_day : block_background_night}>
                    <a target="blank" href={Blog_2_URL} >
                        <img src={Blog2} />
                    </a>
                    <div className="para_blogs">
                        <h2 style={theme.theme === "dark" ? heading_style_day : heading_style_night} className="blog_headings">{Blog_2_Heading}</h2>
                        <p className="sub_style" style={theme.theme === "dark" ? subgraph_style_day : subgraph_style_night}>{Blog_2_Content}</p>
                    </div>
                </div>
                <div className="blog3" style={theme.theme === "dark" ? block_background_day : block_background_night}>
                    <a target="blank" href={Blog_3_URL} >
                        <img src={Blog3} />
                    </a>
                    <div className="para_blogs">
                        <h2 style={theme.theme === "dark" ? heading_style_day : heading_style_night} className="blog_headings">{Blog_3_Heading}</h2>
                        <p className="sub_style" style={theme.theme === "dark" ? subgraph_style_day : subgraph_style_night}>{Blog_3_Content}</p>
                    </div>

                </div>
                <div className="blog4" style={theme.theme === "dark" ? block_background_day : block_background_night}>
                    <a target="blank" href={Blog_4_URL} >
                        <img src={Blog4} />
                    </a>
                    <div className="para_blogs">
                        <h2 style={theme.theme === "dark" ? heading_style_day : heading_style_night} className="blog_headings">{Blog_4_Heading}</h2>
                        <p className="sub_style" style={theme.theme === "dark" ? subgraph_style_day : subgraph_style_night}>{Blog_4_Content}</p>
                    </div>

                </div>
                <div className="blog5" style={theme.theme === "dark" ? block_background_day : block_background_night}>
                    <a target="blank" href={Blog_5_URL} >
                        <img src={Blog5} />
                    </a>
                    <div className="para_blogs">
                        <h2 style={theme.theme === "dark" ? heading_style_day : heading_style_night} className="blog_headings">{Blog_5_Heading}</h2>
                        <p className="sub_style" style={theme.theme === "dark" ? subgraph_style_day : subgraph_style_night}>{Blog_5_Content}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

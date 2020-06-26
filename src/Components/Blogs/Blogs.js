import React from 'react'
import './Blogs.css'
import { Blogs_Main_Heading, Blog_1_URL, Blog_2_URL, Blog_3_URL, Blog_4_URL, Blog_5_URL, Blog_1_Heading, Blog_2_Heading, Blog_3_Heading, Blog_4_Heading, Blog_5_Heading } from '../../Utils/Constants.js'
import Blog1 from '../../images/blog11.png'
import Blog2 from '../../images/blog22.png'
import Blog3 from '../../images/blog33.png'
import Blog4 from '../../images/blog44.png'
import Blog5 from '../../images/blog55.png'

export const Blogs = (props) => {

    const toggle = props.toggle

    let name2Style = {
        color: '#ffffff',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '900'
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
    if (toggle) {

        name2Style = {
            color: '#D33668',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
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
    } else {
        name2Style = {
            color: '#FFA7C3',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
        subgraphStyle = {
            color: '#FFA7C3',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '10',
            fontWeight: '40',
            borderBottom: '1px solid #FFA7C3',
            marginLeft: '30px',
            marginRight: '30px'
        }
    }
    return (
        <div className="Blogs">
            <div className="Blogsheadings">
                <div className="v2"><h1 style={name2Style} className="name2">{Blogs_Main_Heading}</h1></div>
            </div>
            <div className="blogPieces">
                <div align="center" className="blog1">
                    <a target="blank" href={Blog_1_URL} >
                        <img src={Blog1} />
                        <p style={subgraphStyle} className="blog_headings">{Blog_1_Heading}</p>
                    </a>
                </div>
                <div align="center" className="blog2">
                    <a target="blank" href={Blog_2_URL} >
                        <img src={Blog2} />
                        <p style={subgraphStyle} className="blog_headings">{Blog_2_Heading}</p>
                    </a>

                </div>
                <div align="center" className="blog3">
                    <a target="blank" href={Blog_3_URL} >
                        <img src={Blog3} />
                        <p style={subgraphStyle} className="blog_headings">{Blog_3_Heading}</p>
                    </a>
                </div>
                <div align="center" className="blog4">
                    <a target="blank" href={Blog_4_URL} >
                        <img src={Blog4} />
                        <p style={subgraphStyle} className="blog_headings">{Blog_4_Heading}</p>
                    </a>
                </div>
                <div align="center" className="blog5">
                    <a target="blank" href={Blog_5_URL} >
                        <img src={Blog5} />
                        <p style={subgraphStyle} className="blog_headings">{Blog_5_Heading}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

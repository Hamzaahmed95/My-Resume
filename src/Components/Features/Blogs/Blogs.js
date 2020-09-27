import React from 'react'
import './Blogs.css'
import { Blog_1_Content,Blog_2_Content,Blog_3_Content,Blog_4_Content,Blog_5_Content, Blogs_Main_Heading, Blog_1_URL, Blog_2_URL, Blog_3_URL, Blog_4_URL, Blog_5_URL, Blog_1_Heading, Blog_2_Heading, Blog_3_Heading, Blog_4_Heading, Blog_5_Heading } from '../../../Utils/Constants'
import Blog1 from '../../../images/blog11.png'
import Blog2 from '../../../images/blog22.png'
import Blog3 from '../../../images/blog33.png'
import Blog4 from '../../../images/blog44.png'
import Blog5 from '../../../images/blog55.png'

export const Blogs = (props) => {

    const toggle = props.toggle
    let background ={
        backgroundColor: '#363D48'
    }
    let name2Style = {
        color: '#ffffff',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '900'
    }
    let subgraphStyle = {
        color: '#FFA7C3',
        fontFamily: 'Merriweather, Georgia, serif',
        fontSize: '10',
        fontWeight: '40'
    }
    if (toggle) {

        name2Style = {
            color: '#D33668',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
        subgraphStyle = {
            color: '#000000',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '10',
            fontWeight: '40',

        }
        background ={
            backgroundColor: '#FDFAE0'
        }
    } else {
        name2Style = {
            color: '#FFA7C3',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900'
        }
        subgraphStyle = {
            color: '#ffffff',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '10',
            fontWeight: '40',

        }
        background ={
            backgroundColor: '#363D48'
        }
    }
    return (
        <div className="Blogs">
            <div className="Blogsheadings">
                <div className="v2"><h1 style={name2Style} >{Blogs_Main_Heading}</h1></div>
            </div>
            <div className="blogPieces" >
                <div className="blog1" style={background}>
                    <a target="blank" href={Blog_1_URL} >
                        <img src={Blog1} />
                    </a>
                    <div className="para_blogs">
                        <h2 style={name2Style} className="blog_headings">{Blog_1_Heading}</h2>
                        <p className= "sub_style"style={subgraphStyle}>{Blog_1_Content}</p>
                    </div>

                </div>
                <div className="blog2" style={background}>
                <a target="blank" href={Blog_2_URL} >
                        <img src={Blog2} />
                    </a>
                    <div className="para_blogs">
                        <h2 style={name2Style} className="blog_headings">{Blog_2_Heading}</h2>
                        <p className= "sub_style" style={subgraphStyle}>{Blog_2_Content}</p>
                    </div>


                </div>
                <div className="blog3" style={background}>
                <a target="blank" href={Blog_3_URL} >
                        <img src={Blog3} />
                    </a>
                    <div className="para_blogs">
                        <h2 style={name2Style} className="blog_headings">{Blog_3_Heading}</h2>
                        <p className= "sub_style" style={subgraphStyle}>{Blog_3_Content}</p>
                    </div>

                </div>
                <div className="blog4" style={background}>
                <a target="blank" href={Blog_4_URL} >
                        <img src={Blog4} />
                    </a>
                    <div className="para_blogs">
                        <h2 style={name2Style} className="blog_headings">{Blog_4_Heading}</h2>
                        <p className= "sub_style" style={subgraphStyle}>{Blog_4_Content}</p>
                    </div>

                </div>
                <div className="blog5" style={background}>
                <a target="blank" href={Blog_5_URL} >
                        <img src={Blog5} />
                    </a>
                    <div className="para_blogs">
                        <h2 style={name2Style} className="blog_headings">{Blog_5_Heading}</h2>
                        <p className= "sub_style" style={subgraphStyle}>{Blog_5_Content}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

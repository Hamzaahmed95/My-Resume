import React from 'react'
import './Events.css'
import { Event_Main_Heading, Blog_1_URL, Blog_2_URL, Blog_3_URL, Blog_4_URL, Blog_5_URL, Event_1_Heading, Event_2_Heading, Event_3_Heading, Event_4_Heading, Blog_4_Heading, Blog_5_Heading } from '../../Utils/Constants.js'
import Event1 from '../../images/event.jpg'
import Event2 from '../../images/event1.jpg'
import Event3 from '../../images/event2.jpg'
import Event4 from '../../images/event3.jpg'

export const Events = () => {
    return (
        <div className="Blogs">
            <h1 className="name2">{Event_Main_Heading}</h1>
            <div className="blogPieces">
                <div align="center" className="blog1">
                    <img src={Event1} />
                    <p className="blog_headings">{Event_1_Heading}</p>
                </div>
                <div align="center" className="blog2">
                    <img src={Event2} />
                    <p className="blog_headings">{Event_2_Heading}</p>
                </div>
                <div align="center" className="blog3">
                    <img src={Event3} />
                    <p className="blog_headings">{Event_3_Heading}</p>
                </div>
                <div align="center" className="blog4">
                    <img src={Event4} />
                    <p className="blog_headings">{Event_4_Heading}</p>
                </div>
            </div>
        </div>
    )
}

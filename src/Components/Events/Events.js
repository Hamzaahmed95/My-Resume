import React from 'react'
import './Events.css'
import { Event_Main_Heading, Blog_1_URL, Blog_2_URL, Blog_3_URL, Blog_4_URL, Blog_5_URL, Event_1_Heading, Event_2_Heading, Event_3_Heading, Event_4_Heading, Blog_4_Heading, Blog_5_Heading } from '../../Utils/Constants.js'
import Event1 from '../../images/event4.jpg'
import Event2 from '../../images/event1.jpg'
import Event3 from '../../images/event2.jpg'
import Event4 from '../../images/event3.jpg'

export const Events = (props) => {

    const toggle = props.toggle

    let name2Style = {
        color:'#ffffff',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight:'900'
    }
    let subgraphStyle = {
        color: '#FFA7C3',
        fontFamily: 'Merriweather, Georgia, serif',
        fontSize: '10',
        fontWeight: '40',
        borderBottom: '1px solid #FFA7C3',
        marginLeft: '50px',
        marginRight: '50px'
    }
    if(toggle){
      
        name2Style = {
            color:'#FFA7C3',
            fontFamily:'Montserrat, sans-serif',
            fontWeight:'900'
        }
        subgraphStyle = {
            color: '#FFA7C3',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '10',
            fontWeight: '40',
            borderBottom: '1px solid #FFA7C3',
            marginLeft: '50px',
            marginRight: '50px'
        }
    }else{
        name2Style = {
            color:'#FFA7C3',
            fontFamily:'Montserrat, sans-serif',
            fontWeight:'900'
        }
        subgraphStyle = {
            color: '#FFA7C3',
            fontFamily: 'Merriweather, Georgia, serif',
            fontSize: '10',
            fontWeight: '40',
            borderBottom: '1px solid #FFA7C3',
            marginLeft: '50px',
            marginRight: '50px'
        }
    }
    return (
        <div className="Events">
            <div className="Eventsheadings">
                <div className="v1"></div>
                <div className="v2"><h1 style={name2Style} className="name2">{Event_Main_Heading}</h1></div>
            </div>
            <div className="eventPieces">
                <div align="center" className="event1">
                    <img src={Event1} />
                    <p style={subgraphStyle} className="event_headings">{Event_1_Heading}</p>
                </div>
                <div align="center" className="event2">
                    <img src={Event2} />
                    <p style={subgraphStyle }className="event_headings">{Event_2_Heading}</p>
                </div>
                <div align="center" className="event3">
                    <img src={Event3} />
                    <p style={subgraphStyle} className="event_headings">{Event_3_Heading}</p>
                </div>
                <div align="center" className="event4">
                    <img src={Event4} />
                    <p style={subgraphStyle} className="event_headings">{Event_4_Heading}</p>
                </div>
            </div>
        </div>
    )
}

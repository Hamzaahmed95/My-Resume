import React from 'react'
import './MainComponent.css'
import { AboutMe } from '../Features/AboutMe/AboutMe'
import { Introduction } from '../Introduction/Introduction'
import { Achievements } from '../Features/Achievements/Achievements'
import { Blogs } from '../Features/Blogs/Blogs'
import { Projects } from '../Features/Projects/Projects'

//import 'typeface-merriweather'

export const MainComponent = (props) => {

    const toggle = props.toggle

    return (
        <div className="Intro">


            {props.about_me ?
                <div>
                    <Introduction toggle={toggle} />
                    <div className="Projects">
                        <AboutMe toggle={toggle} />
                    </div>
                </div> : ''}
            <div className="for_width">
                {props.achievements ?
                    <div className="Achievements">
                        <Achievements toggle={toggle} />
                    </div> : ''}
                {props.blogs ?
                    <div className="Blogs">
                        <Blogs toggle={toggle} />
                    </div> : ''}

                {props.projects ?
                    <div className="Blogs">
                        <Projects toggle={toggle} />
                    </div> : ''}
            </div>
        </div>
    )
}

import React from 'react'
import './MainComponent.css'
import { AboutMe } from '../Features/AboutMe/AboutMe'
import { Introduction } from '../Introduction/Introduction'
import { Achievements } from '../Features/Achievements/Achievements'
import { Blogs } from '../Features/Blogs/Blogs'
import { Projects } from '../Features/Projects/Projects'

import 'typeface-merriweather'

export const MainComponent = ({ toggle, activeBar }) => {

    return (
        <div className="Intro">
            <Introduction toggle={toggle} />
            {activeBar == "aboutMe" ?
                <div className="Projects">
                    <AboutMe toggle={toggle} />
                </div> : ''}
            {activeBar == "achievements" ?
                <div className="Achievements">
                    <Achievements toggle={toggle} />
                </div> : ''}
            {activeBar == "blogs" ?
                <div className="Blogs">
                    <Blogs toggle={toggle} />
                </div> : ''}

            {activeBar == "projects" ?
                <div className="Blogs">
                    <Projects toggle={toggle} />
                </div> : ''}
        </div>
    )
}

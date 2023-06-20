import React from 'react'
import './index.css'
import { AboutMe, Achievements, Blogs, Projects } from './Section'
import { Introduction } from './Introduction'
import 'typeface-merriweather'
import { useThemeContext } from '../../hooks/useThemeContext'
export const MainComponent = () => {

    const theme = useThemeContext()
    return (
        <div className="main_component">
            <div className="Intro">
                <Introduction />
                {theme.activeBar == "aboutMe" ?
                    <div className="Projects">
                        <AboutMe />
                    </div> : ''}
                {theme.activeBar == "achievements" ?
                    <div className="Achievements">
                        <Achievements />
                    </div> : ''}
                {theme.activeBar == "blogs" ?
                    <div className="Blogs">
                        <Blogs />
                    </div> : ''}

                {theme.activeBar == "projects" ?
                    <div className="Blogs">
                        <Projects />
                    </div> : ''}
            </div>
        </div>
    )
}

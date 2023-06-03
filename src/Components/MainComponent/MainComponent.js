import React, { useContext } from 'react'
import './MainComponent.css'
import { AboutMe } from '../Features/AboutMe/AboutMe'
import { Introduction } from '../Introduction/Introduction'
import { Achievements } from '../Features/Achievements/Achievements'
import { Blogs } from '../Features/Blogs/Blogs'
import { Projects } from '../Features/Projects/Projects'

import 'typeface-merriweather'

import { ThemeContext } from '../App'
import { main_component_background_dark, main_component_background_light } from '../../utils/styles'
export const MainComponent = () => {

    const theme = useContext(ThemeContext)

    return (
        <div style={theme.theme === "dark" ? main_component_background_dark : main_component_background_light} className="main_component">
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

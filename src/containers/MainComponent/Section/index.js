import React from 'react'
import './index.css'
import { AboutMe } from './AboutMe'
import { Achievements } from './Achievements'
import { Blogs } from './Blogs'
import { Projects } from './Projects'
import { useThemeContext } from '../../../hooks/useThemeContext'
export const Sections = () => {

  const theme = useThemeContext()
  return (
    (() => {
      switch (theme.activeBar) {
        case "aboutMe":
          return <AboutMe />;
        case "achievements":
          return <Achievements />;
        case "blogs":
          return <Blogs />;
        case "projects":
          return <Projects />;
        default:
          return null;
      }
    })()
  )
}


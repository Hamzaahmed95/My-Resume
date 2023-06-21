import React from 'react'
import { AboutMe } from './AboutMe'
import { Achievements } from './Achievements'
import { Blogs } from './Blogs'
import { useThemeContext } from '../../../hooks/useThemeContext'
import { Projects } from './Projects'
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


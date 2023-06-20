import React from 'react'
import { NAME, rainbow_style_day, rainbow_style_night, INTRO, REACT, TYPESCRIPT } from '../../../../utils/constants.js'
import './index.css'
import 'typeface-merriweather'
import { useThemeContext } from '../../../../hooks/useThemeContext'

export const Overview = () => {

  const theme = useThemeContext()

  return (
    <div>
      <div>
        <h1 className="name">{NAME}</h1>
        <p className="subgraph1">{INTRO}
          <span className={`highlight_${theme.theme} rainbow`}>
            {' '}{REACT} {' '}
          </span>
          and
          <span className={`highlight_${theme.theme} rainbow`}>
            {' '} {TYPESCRIPT} {' '}
          </span>
        </p>
      </div>
    </div>
  )
}

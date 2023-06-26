import React, { useState, useEffect, useRef } from 'react'
import { NAME, INTRO, REACT, TYPESCRIPT } from '../../../../utils/constants.js'
import './index.css'
import 'typeface-merriweather'
import { useThemeContext } from '../../../../hooks/useThemeContext'
import { CSSTransition } from 'react-transition-group';

export const Overview = () => {
  const wordRef = useRef(null);
  const words = ['JavaScript', 'ES6', 'Babel', 'Webpack'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const theme = useThemeContext()

  useEffect(() => {
    const interval = setInterval(changeWord, 1500);
    return () => clearInterval(interval);

  }, []);

  const changeWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };


  return (
    <div className='overview_container'>
      <h1 className="name">{NAME}</h1>
      <p className="subgraph1">{INTRO}{' '}
        <span className={`highlight_${theme.theme} rainbow`}>
          {REACT}
        </span>
        {' '}and{' '}
        <span className={`highlight_${theme.theme} rainbow`}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="word-transition"
            nodeRef={wordRef}
          >
            <span ref={wordRef}>{words[currentWordIndex]}</span>
          </CSSTransition>
        </span>
      </p>
    </div>
  )
}

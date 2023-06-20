import React, { createContext, useEffect } from 'react';

import './index.css';
import { Sidebar } from '../Sidebar'
import { MainComponent } from '../MainComponent'
import { useThemeContext } from '../../hooks/useThemeContext';

export const ThemeContext = createContext();

const App = () => {
  const theme = useThemeContext()
  useEffect(() => {
    document.body.style.background = theme.newTheme.background
  }, [theme])
  return (
    <div className="app">
      <div className='app_container'>
        <Sidebar />
        <MainComponent />
      </div>
    </div>
  )
}
export default App;

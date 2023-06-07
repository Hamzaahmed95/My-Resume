import React, { createContext } from 'react';

import './index.css';
import { Sidebar } from '../Sidebar'
import { MainComponent } from '../MainComponent'
import { ThemeProvider } from '../ThemeProvider'

export const ThemeContext = createContext();

const App = () => (
  <ThemeProvider>
    <div className="app_container">
      <Sidebar />
      <MainComponent />
    </div>
  </ThemeProvider>
)

export default App;

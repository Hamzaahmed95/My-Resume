import React, { createContext } from 'react';

import './index.css';
import { Sidebar } from '../Sidebar/Sidebar'
import { MainComponent } from '../MainComponent/MainComponent'
import { ThemeProvider } from '../ThemeProvider/index'

export const ThemeContext = createContext();

const App = () => (
  <ThemeProvider>
    <Sidebar />
    <MainComponent />
  </ThemeProvider>
)

export default App;

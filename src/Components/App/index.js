import React, { createContext } from 'react';

import './index.css';
import { Sidebar } from '../Sidebar'
import { MainComponent } from '../MainComponent'
import { ThemeProvider } from '../ThemeProvider'

export const ThemeContext = createContext();

const App = () => (
  <ThemeProvider>
    <Sidebar />
    <MainComponent />
  </ThemeProvider>
)

export default App;

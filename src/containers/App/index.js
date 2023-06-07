import React, { createContext } from 'react';

import './index.css';
import { Sidebar } from '../Sidebar'
import { MainComponent } from '../MainComponent'

export const ThemeContext = createContext();

const App = () => (
  <div className="app_container">
    <Sidebar />
    <MainComponent />
  </div>
)

export default App;

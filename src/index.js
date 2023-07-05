import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { ThemeProvider } from './containers/ThemeProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

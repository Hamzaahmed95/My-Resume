import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import './components/App/App.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="app_container">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

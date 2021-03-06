import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './pages/global/css/global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CustomTheme from './pages/global/material/material-theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={CustomTheme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
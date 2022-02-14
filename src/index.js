import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Google Analytics
import ReactGA from 'react-ga';

ReactGA.initialize('UA-149961763-4');

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom"; //Import router

import './index.css';
import App from './App';

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);

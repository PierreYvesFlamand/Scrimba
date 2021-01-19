// https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css //

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './Context';

import './style.css';

import App from './App';

ReactDOM.render(
    <>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' />
        <ContextProvider>
            <Router>
                <App />
            </Router>
        </ContextProvider>
    </>,
    document.getElementById('root')
);

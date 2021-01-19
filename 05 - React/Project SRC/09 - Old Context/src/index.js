import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import App from './App';
import { UserContextProvider } from './userContext';

ReactDOM.render(
    <React.StrictMode>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

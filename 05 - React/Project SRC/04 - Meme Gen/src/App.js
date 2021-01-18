import React from 'react';

import './styles.css';

import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator.js';

function App() {
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    );
}

export default App;

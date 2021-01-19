import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

// import { seedDatabase } from './seed';

const config = {
    apiKey: 'AIzaSyC-VHhOqY7b6f5KzIX9z4B2ss7ryuwof3M',
    authDomain: 'netflix-clone-polfy.firebaseapp.com',
    projectId: 'netflix-clone-polfy',
    storageBucket: 'netflix-clone-polfy.appspot.com',
    messagingSenderId: '958594178923',
    appId: '1:958594178923:web:6dc2c6fc4720e174ce362e',
};

// const firebase = window.firebase.initializeApp(config);

// seedDatabase(firebase);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);

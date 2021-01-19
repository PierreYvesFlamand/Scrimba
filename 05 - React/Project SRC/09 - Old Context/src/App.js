import React, { useState } from 'react';

import Header from './Header';
import { UserContextConsumer } from './userContext';

function App() {
    const [inputUserName, setInputUserName] = useState('');

    return (
        <div>
            <Header />
            <main>
                <UserContextConsumer>
                    {({ userName, setUserName }) => (
                        <>
                            <p className='main'>No new notifications, {userName}! 🎉</p>
                            <input
                                type='text'
                                name='inputUserName'
                                placeholder='New username'
                                value={inputUserName}
                                onChange={(e) => setInputUserName(e.target.value)}
                            />
                            <button onClick={() => setUserName(inputUserName)}>Change Username</button>
                        </>
                    )}
                </UserContextConsumer>
            </main>
        </div>
    );
}

export default App;

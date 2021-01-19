import React from 'react';
import { UserContextConsumer } from './userContext';

function Header() {
    return (
        <header>
            <UserContextConsumer>{({ userName }) => <p>Welcome, {userName}!</p>}</UserContextConsumer>
        </header>
    );
}

export default Header;

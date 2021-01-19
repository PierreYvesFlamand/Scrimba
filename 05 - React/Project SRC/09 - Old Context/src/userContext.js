import React, { useState } from 'react';

const { Provider, Consumer } = React.createContext();

function UserContextProvider(props) {
    const [userName, setUserName] = useState('Bob123');

    return <Provider value={{ userName, setUserName }}>{props.children}</Provider>;
}

export { UserContextProvider, Consumer as UserContextConsumer };

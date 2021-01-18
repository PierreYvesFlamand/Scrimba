import React, { useState, useEffect } from 'react';

const colorArray = ['#00ff00', '#ff0000', '#0000ff', '#039090', '#300909', '#900390'];

function App() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('');

    function increment() {
        setCount((prevCount) => prevCount + 1);
    }

    function decrement() {
        setCount((prevCount) => prevCount - 1);
    }

    function double() {
        setCount((prevCount) => prevCount * 2);
    }

    function half() {
        setCount((prevCount) => prevCount / 2);
    }

    // // Auto increment
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCount((prevCount) => prevCount + 1);
    //     }, 1000);

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);

    useEffect(() => {
        setColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
    }, [count]);

    return (
        <div>
            <h1 style={{ color: color }}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={double}>Double</button>
            <button onClick={half}>Half</button>
        </div>
    );
}

export default App;

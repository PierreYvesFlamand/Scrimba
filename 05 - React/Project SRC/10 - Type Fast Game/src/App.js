import React from 'react';
import useWordGame from './useWordGame';

function App() {
    const {
        textAreaRef,
        handleChange,
        text,
        isTimeRunning,
        timeRemaining,
        startGame,
        wordCount,
    } = useWordGame(10);

    return (
        <>
            <h1>How fast do you type?</h1>
            <textarea ref={textAreaRef} value={text} onChange={handleChange} disabled={!isTimeRunning} />
            <h4>Time remainaing: {timeRemaining}</h4>
            <button disabled={isTimeRunning} onClick={startGame}>
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </>
    );
}

export default App;

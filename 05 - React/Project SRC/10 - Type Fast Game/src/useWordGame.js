import { useState, useEffect, useRef } from 'react';

function useWordGame(startingTime = 10) {
    const [text, setText] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(startingTime);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);

    const textAreaRef = useRef(null);

    function handleChange(e) {
        const { value } = e.target;
        setText(value);
    }

    function calculateWordCount(text) {
        return text
            .trim()
            .split(' ')
            .filter((word) => word !== '').length;
    }

    function startGame() {
        setText('');
        setTimeRemaining(startingTime);
        setIsTimeRunning(true);
        textAreaRef.current.disabled = false;
        textAreaRef.current.focus();
    }

    function endGame() {
        setIsTimeRunning(false);
        setWordCount(calculateWordCount(text));
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining((prevTime) => {
                    return prevTime - 1;
                });
            }, 1000);
            setWordCount(calculateWordCount(text));
        } else if (timeRemaining === 0) {
            endGame();
        }
    }, [timeRemaining, isTimeRunning]);

    return { textAreaRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount };
}

export default useWordGame;

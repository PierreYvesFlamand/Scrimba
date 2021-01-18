const grid = document.querySelector('.grid');
const startButton = document.querySelector('#start');
const scoreDisplay = document.querySelector('#score');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const WIDTH = 10;
let appleIndex;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;
let timerId;

const createGrid = () => {
    for (let i = 0; i < WIDTH * WIDTH; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        grid.appendChild(square);

        squares.push(square);
    }
};

createGrid();

currentSnake.forEach((bodyPart) => {
    squares[bodyPart].classList.add('snake');
});

const startGame = () => {
    currentSnake.forEach((bodyPart) => {
        squares[bodyPart].classList.remove('snake');
    });

    squares[appleIndex].classList.remove('apple');

    clearInterval(timerId);
    currentSnake = [2, 1, 0];
    score = 0;

    scoreDisplay.textContent = score;

    intervalTime = 1000;
    direction = 1;
    generateApple();

    currentSnake.forEach((bodyPart) => {
        squares[bodyPart].classList.add('snake');
    });

    timerId = setInterval(move, intervalTime);
};

const move = () => {
    if (
        (currentSnake[0] + WIDTH >= WIDTH * WIDTH && direction === WIDTH) || // If hit bottom wall
        (currentSnake[0] % WIDTH === WIDTH - 1 && direction === 1) || // If hit right wall
        (currentSnake[0] % WIDTH === 0 && direction === -1) || // If hit left wall
        (currentSnake[0] - WIDTH < 0 && direction === -WIDTH) || // If hit top wall
        squares[currentSnake[0] + direction].classList.contains('snake')
    ) {
        return clearInterval(timerId);
    }

    const tail = currentSnake.pop();
    squares[tail].classList.remove('snake');

    currentSnake.unshift(currentSnake[0] + direction);

    // Apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
        squares[currentSnake[0]].classList.remove('apple');
        generateApple();

        squares[tail].classList.add('snake');
        currentSnake.push(tail);
        scoreDisplay.textContent = ++score;

        clearInterval(timerId);
        intervalTime *= speed;
        timerId = setInterval(move, intervalTime);
    }

    squares[currentSnake[0]].classList.add('snake');
};

const generateApple = () => {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains('snake'));
    squares[appleIndex].classList.add('apple');
};

generateApple();

const control = (e) => {
    switch (e.keyCode) {
        // RIGHT
        case 39:
            direction = 1;
            break;

        // UP
        case 38:
            direction = -WIDTH;
            break;

        // LEFT
        case 37:
            direction = -1;
            break;

        // DOWN
        case 40:
            direction = WIDTH;
            break;
    }
};

document.addEventListener('keyup', control);

startButton.addEventListener('click', startGame);

// Game state
let player1Score = 0;
let player2Score = 0;
let isPlayer1Turn = true;

// DOM Nodes
const player1Dice = document.querySelector('#player1Dice');
const player2Dice = document.querySelector('#player2Dice');

const player1Scoreboard = document.querySelector('#player1Scoreboard');
const player2Scoreboard = document.querySelector('#player2Scoreboard');

const message = document.querySelector('#message');

const rollBtn = document.querySelector('#rollBtn');
const resetBtn = document.querySelector('#resetBtn');

// Logique
rollBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (isPlayer1Turn) {
        player1Score += randomNumber;
        player1Dice.textContent = randomNumber;
        player1Scoreboard.textContent = player1Score;
    } else {
        player2Score += randomNumber;
        player2Dice.textContent = randomNumber;
        player2Scoreboard.textContent = player2Score;
    }

    if (player1Score >= 20 || player2Score >= 20) {
        message.textContent = `Player ${isPlayer1Turn ? 1 : 2} has won! ${isPlayer1Turn ? '🥳' : '🎉'}`;
        rollBtn.style.display = 'none';
        resetBtn.style.display = 'block';
    } else {
        player1Dice.classList.toggle('active');
        player2Dice.classList.toggle('active');

        isPlayer1Turn = !isPlayer1Turn;
        message.textContent = `Player ${isPlayer1Turn ? 1 : 2} Turn`;
    }
});

resetBtn.addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    isPlayer1Turn = true;

    rollBtn.style.display = 'block';
    resetBtn.style.display = 'none';

    message.textContent = 'Player 1 Turn';
    player1Scoreboard.textContent = player1Score;
    player2Scoreboard.textContent = player2Score;
    player1Dice.textContent = '-';
    player2Dice.textContent = '-';

    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');
});

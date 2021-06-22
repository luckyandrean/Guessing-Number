'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER';
  } else if (guess === secretNumber) {
    if (score > highScore) {
      document.querySelector('.highscore').textContent = highScore = score;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.message').textContent = 'YOU WIN';
    document.getElementsByClassName('btn check')[0].disabled = true;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess != secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'TOO HIGH' : 'TOO LOW';
      document.querySelector('.score').textContent = score = score - 1;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST';
      document.querySelector('.number').textContent = secretNumber;
      document.getElementsByClassName('btn check')[0].disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  document.querySelector('.score').textContent = score;
  document.getElementsByClassName('btn check')[0].disabled = false;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Star guessing...';
});

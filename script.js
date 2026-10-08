'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log((document.querySelector('.guess').value = 23));
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '😅 No number!';
    displayMessage('😅 No number!');

    ////When guess is too high
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '😑 Too high!' : '🤨 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      displayMessage('Game Over');
      alert('😛YOU ARE LOST!');
    }

    //When guess is too low
  } /*else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤨 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      alert('😛YOU ARE LOST!');
    }

    //When player wins
  }*/ else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    displayMessage('🎉 correct Number!');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

//Button again
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = number;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
  displayMessage('Start guessing...');
});

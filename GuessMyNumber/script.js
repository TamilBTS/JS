'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 10;
// document.querySelector('.guess').value = 900;
// console.log(document.querySelector('.guess').value);
let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let output = false;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(secretNum);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number..';
  } else if (guess === secretNum) {
    output = true;
    if (score === 0) {
    } else {
      document.querySelector('body').style.backgroundColor = '#DC9AE0 ';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').style.backgroundColor = '#550B5A';
      document.querySelector('.number').style.color = '#1DD3C7';
      document.querySelector('.message').textContent = 'Congratulations..🥳🎊';
      document.querySelector('.number').textContent = secretNum;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
        
    }
  } else if (guess < secretNum) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too Low📉';
    } else {
      document.querySelector('.message').textContent =
        'Oops..You Lost the Game 💥🥺';
    }
  } else if (guess > secretNum) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too High📈';
    } else {
      document.querySelector('.message').textContent =
        'Oops..You Lost the Game 💥🥺';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  console.log(highScore);
  secretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '0';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.number').textContent = '?';
});

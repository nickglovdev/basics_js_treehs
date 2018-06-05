// Basic if else statement
document.write('<h2>Guessing Language Game</h2>');
var answer = prompt(' Question 1: What programming language is the name of a gem?');
if (answer.toUpperCase() === 'RUBY') {
  document.write('<p>That right gem!</p>');
} else {
  document.write('<p>Sorry, that\'s wrong</p>');
}

// Random number guessing
document.write('<h2>Guessing Number Game</h2>')
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?')
if (parseInt(guess) === randomNumber) {
  document.write('<p>You guess the number!</p>');
} else if (parseInt(guess) < randomNumber) {
    var guessMore = prompt('Try again. The number is higher.');
    if (parseInt(guessMore) === randomNumber) {
        correctGuess = true;
    }
} else if (parseInt(guess) > randomNumber) {
  var guessMore = prompt('Try again. The number is lower.');
  if (parseInt(guessMore) === randomNumber) {
      correctGuess = true;
  }
}
if(correctGuess) {
  document.write('<p>You are correct!</p>');
} else {
  document.write('<p>Sorry, The number was ' + randomNumber + '.</p>');
}

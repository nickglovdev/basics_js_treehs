// Basic if else statement
var answer = prompt(' Question 1: What programming language is the name of a gem?');
if (answer.toUpperCase() === 'RUBY') {
  document.write('<p>That right gem!</p>');
} else {
  document.write('<p>Sorry, that\'s wrong</p>');
}

// Random number guessing
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?')
if (parseInt(guess) === randomNumber) {
  document.write('<p>You are correct!</p>')
} else {
  document.write('<p>Sorry. The number was ' + randomNumber + '</p>')
}

'use strict';

console.log('Bonjourno');

// Array to store the questions
const questions = [
  "Did you eat breakfast today?", 
  "Are you wearing shoes right now?", 
  "Is there a roof over your head?",
  "What is the opposite of 'no' ?",
  "Is the Earth a cube?",
  "Guess how many times in a week I sweep my apartment (Hint: It's a number between 1 and 10)",

];

// Array to store the answers
const answers = [];

// Loop to prompt the user 
for (let i = 0; i < questions.length; i++) {
  const answer = prompt(questions[i]);
  answers.push(answer);
}

// Output for answers
for (let i = 0; i < answers.length; i++) {
  console.log("Answer " + (i + 1) + ": " + answers[i]);
}

// Guessing game
const correctNumber = 7;
let attempts = 4;
let guessedCorrectly = false;

while (attempts > 0) {
  const guess = parseInt(prompt("Guess how many times in a week I sweep my apartment? (Hint: It's a number between 1 and 10):"));

  if (guess === correctNumber) {
    alert("Correct! I like to keep my living environment tidy 🧹 ");
    guessedCorrectly = true;
    break;
  } else if (guess > correctNumber) {
    alert("Think lower! Guess again.");
  } else {
    alert("Oh, so you think that I'm a disgusting, filthy, uncivilized animal? Try again.");
  }

  attempts--;
}

if (!guessedCorrectly) {
  alert("Well, you tried. The correct number is " + correctNumber + ".");
}

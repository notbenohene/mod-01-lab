'use strict';

console.log('Bonjourno');

// Array to store the questions
const questions = [
  "Is breakfast the most important meal?", 
  "Do shoes provide protection to your feet?", 
  "Is 'dark' the opposite of 'light' ?",
  "What is the opposite of 'no' ?",
  "Is the Earth NOT a cube?",
  // "Guess how many times in a week I sweep my apartment (Hint: It's a number between 1 and 10)",
  // "Name a type of wood."
];

// Array to store the answers
const answers = [];

// Loop to prompt the user 
for (let i = 0; i < questions.length; i++) {
  console.log('inside of the questions for loop')
  const answer = prompt(questions[i]);
  answers.push(answer);
}

// Output for answers
for (let i = 0; i < answers.length; i++) {
  console.log("Answer " + (i + 1) + ": " + answers[i]);
}

// Code for user sweeping guesses
const correctNumber = 7;
let attempts = 4;
let guessedCorrectly = false;

for (let i = 0; i < attempts; i++) {
  const guess = parseInt(prompt("Guess how many times in a week I swe)ep my apartment? (Hint: It's a number between 1 and 10):"));

  if (guess === correctNumber) {
    alert("Correct! I like to keep my living environment tidy 🧹 ");
    guessedCorrectly = true;
    break;
  } else if (!guessedCorrectly) {
    alert("Well, you tried. The correct number is " + correctNumber + ".");
  } else if (guess > correctNumber) {
    alert("Think lower! Guess again.");
  } else {
    alert("Oh, so you think that I'm a disgusting, filthy, uncivilized animal? Try again.");
  }
  attempts--;
}



// Code for wood answers
const correctAnswers = ["oak", "mahogany", "teak", "pine", "cedar", "birch", "walnut", "apple", "hickory", "redwood"];
let tries = 6;
let answeredCorrectly = false;
const input = prompt("Name a type of wood:");
for (let i = 0; i < tries; i++) {
//  input = prompt("Name a type of wood:");
  if (correctAnswers.includes(input.toLowerCase())) {
    alert("Correct! " + input + " is indeed wood");
    answeredCorrectly = true;
    break;
  } else if (!answeredCorrectly) {
    alert("There are several types of woods. Any of these would have worked: " + correctAnswers.join(", "));
  } else {
    alert("Not quite. Try again.");
  } 
  tries--;
}

// Count correct answers
let correctCount = 0;

for (let i = 0; i < answers.length; i++) {
  if (answers[i].toLowerCase() === "yes", "oak", "mahogany", "teak", "pine", "cedar", "birch", "walnut", "apple", "hickory", "redwood") {
    correctCount++;
  }
}

alert("You answered " + correctCount + " questions correctly!");

// Shout out to ChatGPT and James Kierstead!
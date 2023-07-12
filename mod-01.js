'use strict';

console.log('Bonjourno');

// Array to store the questions
const questions = [
  "Did you eat breakfast today?", 
  "Are you wearing shoes right now?", 
  "Is there a roof over your head?",
  "What is the opposite of 'no' ?",
  "Is the Earth a cube?",];

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



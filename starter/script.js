"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!👏";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

//this code generates a random secret number for the user to guess
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//score variable
let score = 20;

//Put number in the question mark
document.querySelector(".number").textContent = secretNumber;

//click
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //code for click. if guess is not right, it will tell the user if their guess is too high or too low. if its right, it will tell the user they got the correct number. This code also decreases the score by one everytime the user guess the wrong number.
  if (!guess) {
    document.querySelector(".message").textContent = "No number! 😒";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!👏";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Number is too high! Go down a bit!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST THE GAME 😭";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Number is too low! Go up a bit!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST THE GAME 😭";
      document.querySelector(".score").textContent = 0;
    }
  }
});

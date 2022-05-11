"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!👏";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

//this code generates a random secret number for the user to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//score variable
let score = 20;
//highscore variable
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//click "Check!"
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //code for click. if guess is not right, it will tell the user if their guess is too high or too low. if its right, it will tell the user they got the correct number. This code also decreases the score by one everytime the user guess the wrong number.

  //When there is no input.
  if (!guess) {
    // document.querySelector(".message").textContent = "No number! 😒";
    displayMessage("No Number!"); //Function calling to display a message
    //When player wins, and get the correct number
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number!👏";
    displayMessage("Correct Number!!");
    //Put number in the question mark
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // If the score is greater than the current high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Number is too high! " : "Number is too low!";
      displayMessage(
        guess > secretNumber ? "Number is too high! " : "Number is too low!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "YOU LOST THE GAME 😭";
      displayMessage("YOU LOST THE GAME 😭");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   //When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent =
  //       "Number is too high! Go down a bit!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "YOU LOST THE GAME 😭";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent =
  //       "Number is too low! Go up a bit!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "YOU LOST THE GAME 😭";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "red";
  //   }
  // }
});

//"Again!" Button click
document.querySelector(".again").addEventListener("click", function () {
  //score 20
  score = 20;
  //secret number in the question mark
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Brings the message to the originial state "Start guessing..."
  displayMessage("Start guessing...");
  // document.querySelector(".message").textContent = "Start guessing...";
  //Clears the number, and brings it back to the question mark symbol
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  //Brings the background color to its original state
  document.querySelector("body").style.backgroundColor = "#222";
  //resets the score back to 20
  document.querySelector(".score").textContent = score;
  //clears the input.
  document.querySelector("input").value = "";
});

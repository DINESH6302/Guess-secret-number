"use strict";

let number = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no value
  if (!guess) {
    document.querySelector(".message").textContent = "Enter a Number❗";

    document.querySelector("body").style.backgroundColor = "#222";
  }

  // less & grater then
  else if (guess > 10 || guess < 0) {
    document.querySelector(".message").textContent = "Enter a number 1 to 10";

    document.querySelector("body").style.backgroundColor = "#222";

    // low score
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low🔻";

      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "rgb(230, 89, 89)";
    } else {
      document.querySelector(".message").textContent = "Game over💣";
      document.querySelector(".score").textContent = 0;
    }
  }

  // high score
  else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high🔺";

      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "rgb(230, 89, 89)";
    } else {
      document.querySelector(".message").textContent = "Game over💣";
      document.querySelector(".score").textContent = 0;
    }
  }

  // correct
  else if (guess === number) {
    document.querySelector(".message").textContent = "Correct Number🎉";

    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = number;

    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    setTimeout(() => reStart(), 2000);
  }
});

// Again
function reStart() {
  score = 10;
  number = Math.trunc(Math.random() * 10) + 1;

  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".message").textContent = "Start Guessing...";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
}

document.querySelector(".again").addEventListener("click", reStart());

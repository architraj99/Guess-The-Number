let guessInput =
    document.getElementById("guessInput");

let guessBtn =
    document.getElementById("guessBtn");

let restartBtn =
    document.getElementById("restartBtn");

let message = document.querySelector(".message");
let attempts = document.querySelector(".attempts");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let totalAttempts = 0;
let maxAttempts = 10;
let gameOver = false;

guessBtn.addEventListener("click", function () {

        if (gameOver) {
            return;
        }

        let userGuess = Number(guessInput.value);

        if (!userGuess) {

            message.innerText =" Enter a valid number";
            return;
        }

        totalAttempts++;

        attempts.innerText = "Attempts: " + totalAttempts + "/ " + maxAttempts;

        if (userGuess === randomNumber) {

            message.innerText = "Correct Number!";
            message.style.color = "#16a34a";
            gameOver = true;
            restartBtn.style.display = "block";
        }

        else if (userGuess > randomNumber) {

            message.innerText = "📈 Too High!";
            message.style.color = "#dc2626";
        }

        else {

            message.innerText = "📉 Too Low!";
            message.style.color = "#ea580c";
        }

        if (totalAttempts >= maxAttempts && userGuess !== randomNumber) {

            message.innerText = "You Lost... Number was " + randomNumber;

            message.style.color = "#dc2626";
            gameOver = true;
            restartBtn.style.display = "block";
        }

        guessInput.value = "";
    }
);

restartBtn.addEventListener("click", function () {

        location.reload();
    }
);

let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let message = document.querySelector(".message");
let attempts = document.querySelector(".attempts");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let totalAttempts = 0;

guessBtn.addEventListener("click", function() {

    let userGuess = Number(guessInput.value);
    totalAttempts++;
    attempts.innerText = "Attempts: " + totalAttempts;

    if(userGuess === randomNumber) {

        message.innerText = "Correct Number!";
    }
    else if(userGuess > randomNumber) {

        message.innerText = "Too High!";
    }
    else {

        message.innerText = "Too Low!";
    }
}
);
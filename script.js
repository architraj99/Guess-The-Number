let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let message = document.querySelector(".message");
let attempts = document.querySelector(".attempts");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let totalAttempts = 0;

guessBtn.addEventListener("click", function() {

    let userGuess = Number(guessInput.value);

    if(!userGuess) {

        message.innerText = "Enter a valid number";
        return;
    }

    totalAttempts++;
    attempts.innerText = "Attempts: " + totalAttempts;

    if(userGuess === randomNumber) {

        message.innerText = "Correct Number!";
        message.style.color = "#16a34a";
    }
    else if(userGuess > randomNumber) {

        message.innerText = "Too High!";
        message.style.color = "#dc2626";
    }
    else {

        message.innerText = "Too Low!";
        message.style.color = "#ea580c";
    }

    guessInput.value = "";
}
);
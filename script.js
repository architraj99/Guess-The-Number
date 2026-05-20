let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let restartBtn = document.getElementById("restartBtn");
let difficulty = document.getElementById("difficulty");
let message = document.querySelector(".message");
let attempts = document.querySelector(".attempts");
let bestScore = document.querySelector(".best-score");
let maxRange = Number(difficulty.value);
let randomNumber = Math.floor(Math.random() * 100) + 1;
let totalAttempts = 0;
let maxAttempts = 10;
let gameOver = false;
let best = 0;

function finishGame() {
    gameOver = true;
    restartBtn.style.display = "block";
}

function updateBestScore() {

    if(best === 0 || totalAttempts < best) {

        best = totalAttempts;
        bestScore.innerText = "Best: " + best;
    }
}

guessBtn.addEventListener("click", function() {

    if(gameOver) {
        return;
    }

    let userGuess = Number(guessInput.value);

    if(!userGuess) {

        message.innerText = "Enter a valid number";
        return;
    }

    totalAttempts++;
    attempts.innerText = "Attempts: " + totalAttempts + "/" + maxAttempts;

    if(userGuess === randomNumber) {

        message.innerText = "Correct Guess!😏";
        message.style.color = "#22c55e";
        updateBestScore();
        finishGame();
    }
    else if(userGuess > randomNumber) {

        message.innerText = "Too High!";
        message.style.color = "#fa7324";
    }
    else {

        message.innerText = "Too Low!";
        message.style.color = "#eb9514";
    }

    if(totalAttempts >= maxAttempts && userGuess !== randomNumber) {

        message.innerText = "You Lost...🥺 Number was " + randomNumber;
        message.style.color = "#dc2626";
        finishGame();
    }

    guessInput.value = "";
}
);

guessInput.addEventListener(
    "keydown", function(event) {

        if(event.key === "Enter") {
            guessBtn.click();
        }
    }
);

restartBtn.addEventListener("click", function() {
    location.reload();
}
);

difficulty.addEventListener(
    "change", function() {
        maxRange = Number(difficulty.value);
        randomNumber = Math.floor(Math.random() * maxRange) +1;
    }
);
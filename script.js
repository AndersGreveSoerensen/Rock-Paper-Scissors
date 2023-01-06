// DEFINE ALL NECESSARY GLOBAL VARIABLES
let playerScore = 0
let computerScore = 0

let rpsButtonContainer = document.querySelector("#rpsButtonContainer")
let displayRoundResults = document.querySelector("#roundResults")
let displayCurrentScore = document.querySelector("#currentScore")
let resultContainer = document.querySelector("#resultContainer")
let rpsButtons = document.querySelectorAll(".rpsButton")
let rockButton = document.querySelector("#rock")
let playerImage = document.querySelector("#playerImage")
let computerImage = document.querySelector("#computerImage")
let playerImageText = document.querySelector("#playerImageText")
let computerImageText = document.querySelector("#computerImageText")
let playerImageContainer = document.querySelector("#playerImageContainer")
let computerImageContainer = document.querySelector("#computerImageContainer")
let makeSelectionHeading = document.querySelector("#makeSelectionHeading")
let goAgainText = document.querySelector("#goAgainText")

let btn = document.querySelectorAll(".rpsButton");
let resetButton = document.querySelector("#resetButton");


// RUN THE GAME
btn.forEach(button => button.addEventListener("click", gameState))
resetButton.addEventListener("click", gameReset)


// DEFINE ALL THE FUNCTIONS NECCESARY TO RUN THE GAME
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) { return "rock" }
    else if (num == 1) { return "paper" }
    else { return "scissors" }
}


function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    
    let playerChoice = playerSelection.toLowerCase()
    let roundEndText = ""
    if (playerChoice === computerSelection) {
        roundEndText = `You both selected ${playerChoice}. Draw!`
    }
    else if (playerChoice == "paper" && computerSelection == "rock") {
        roundEndText = "Paper beats Rock. You Win This Round!"
    }
    else if (playerChoice == "paper" && computerSelection == "scissors") {
        roundEndText = "Scissors beats Paper. You Lose This Round!"
    }
    else if (playerChoice == "rock" && computerSelection == "scissors") {
        roundEndText = " Rock beats Scissors. You Win This Round!"
    }
    else if (playerChoice == "rock" && computerSelection == "paper") {
        roundEndText = "Paper beats Rock. You Lose This Round!"
    }
    else if (playerChoice == "scissors" && computerSelection == "paper") {
        roundEndText = "Scissors beats Paper. You Win This Round!"
    }
    else if (playerChoice == "scissors" && computerSelection == "rock") {
        roundEndText = "Rock beats Scissors. You Lose This Round!"
    }
    return [roundEndText, playerSelection, computerSelection]
}


function pictureChange(e, computerSelection) {
    if (e.target.id == "rock") {
        playerImage.src = "rps-pictures/rpsRock.png"
    }
    else if (e.target.id == "paper") {
        playerImage.src = "rps-pictures/rpsPaper.png"
    }
    else {
        playerImage.src = "rps-pictures/rpsScissors.png"
    }

    if (computerSelection == "rock") {
        computerImage.src = "rps-pictures/rpsRock.png"
    }
    else if (computerSelection == "paper") {
        computerImage.src = "rps-pictures/rpsPaper.png"
    }
    else {
        computerImage.src = "rps-pictures/rpsScissors.png"
    }
}


function gameStartToggleHide() {
    playerImageText.classList.remove("hide")
    computerImageText.classList.remove("hide")
    playerImageContainer.classList.remove("hide")
    computerImageContainer.classList.remove("hide")
    resultContainer.classList.remove("hide")
    makeSelectionHeading.classList.add("hide")
}


function gameResetToggleHide() {
    playerImageText.classList.add("hide")
    computerImageText.classList.add("hide")
    playerImageContainer.classList.add("hide")
    computerImageContainer.classList.add("hide")
    resultContainer.classList.add("hide")
    makeSelectionHeading.classList.remove("hide")
    goAgainText.classList.remove("hide")
}


function shouldGameEnd() {
    if (playerScore == 5 || computerScore == 5) {
        
        let gameResult = document.createElement("p")
        gameResult.setAttribute("id", "gameResult")
        resultContainer.appendChild(gameResult)
        if (playerScore > computerScore) {
            gameResult.textContent = "You win the game! You were first to 5."
        }
        else {gameResult.textContent = "You lost the game! The computer was first to 5."}
        
        rpsButtons.forEach((button) => {button.classList.add("hide")} )
        resetButton.textContent = "Play Again!"
        
        goAgainText.classList.add("hide")
    }
};


function gameState(e) {
    let roundResults = playRound(e.target.id)
    let roundEndText = roundResults[0]

    displayRoundResults.textContent = roundEndText

    if (roundEndText.includes("Win")) {playerScore += 1}
    else if (roundEndText.includes("Lose")) {computerScore += 1}
    
    displayCurrentScore.textContent = `The score is: ${playerScore} to ${computerScore}`

    pictureChange(e, roundResults[2])
    shouldGameEnd()
    gameStartToggleHide()
};


function gameReset(e) {
    if (rockButton.classList.contains("hide")) {
        rpsButtons.forEach((button) => button.classList.remove("hide"))
    }
        playerScore = 0
        computerScore = 0
        displayCurrentScore.textContent = ""
        displayRoundResults.textContent = ""
        
        let gameResult = document.getElementById("gameResult")
        if (gameResult) {
            gameResult.remove()
        };
    resetButton.textContent = "Reset Game"

    playerImage.src = ""
    computerImage.src = ""

        gameResetToggleHide()
    };
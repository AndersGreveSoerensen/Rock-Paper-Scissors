function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) { return "rock" }
    else if (num == 1) { return "paper" }
    else { return "scissors" }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    
    let playerChoice = playerSelection.toLowerCase()
    if (playerChoice === computerSelection) {
        return `Draw! You both selected ${playerChoice}`
    }
    else if (playerChoice == "paper" && computerSelection == "rock") {
        return "You Win This Round! Paper beats Rock."
    }
    else if (playerChoice == "paper" && computerSelection == "scissors") {
        return "You Lose This Round! Scissors beats Paper"
    }
    else if (playerChoice == "rock" && computerSelection == "scissors") {
        return "You Win This Round! Rock beats Scissors!"
    }
    else if (playerChoice == "rock" && computerSelection == "paper") {
        return "You Lose This Round! Paper beats Rock"
    }
    else if (playerChoice == "scissors" && computerSelection == "paper") {
        return "You Win This Round! Scissors beats Paper"
    }
    else if (playerChoice == "scissors" && computerSelection == "rock") {
        return "You Lose This Round! Rock beats Scissors"
    }
    // else return "You Lose! Rock beats Scissors"
}


let playerScore = 0
let computerScore = 0

let rpsButtonContainer = document.querySelector("#rpsButtonContainer")
let displayRoundResults = document.querySelector("#roundResults")
let displayCurrentScore = document.querySelector("#currentScore")
let resultContainer = document.querySelector("#resultContainer")
let rpsButtons = document.querySelectorAll(".rpsButton")
let rockButton = document.querySelector("#rock")

function gameState(e) {
    let roundResult = playRound(e.target.id)

    displayRoundResults.textContent = roundResult

    if (roundResult.includes("Win")) {playerScore += 1}
    else if (roundResult.includes("Lose")) {computerScore += 1}
    
    displayCurrentScore.textContent = `The score is: ${playerScore} ${computerScore}`

    shouldGameEnd()
};


function shouldGameEnd() {
    if (playerScore == 5 || computerScore == 5) {

        let gameResult = document.createElement("div")
        gameResult.setAttribute("id", "gameResult")
        resultContainer.appendChild(gameResult)
        if (playerScore > computerScore) {
            gameResult.textContent = "You win the game! You were first to 5."
        }
        else {gameResult.textContent = "You lost the game! The computer was first to 5."}
        
        rpsButtons.forEach((button) => {button.classList.add("hide")} )
        resetButton.textContent = "Play Again!"
    }
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
    };

let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", gameReset)

const btn = document.querySelectorAll(".rpsButton");
btn.forEach(button => button.addEventListener("click", gameState))


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



function game() {
let playerScore = 0
let computerScore = 0

while (playerScore < 5 && computerScore < 5) {
    // const btn = document.querySelectorAll("button");

    // btn.forEach(button => button.addEventListener("click", (e) => {
    //     if (e.target.id  == "rock") {let playerInput = e.target.id}
    //     else if (e.target.id == "paper") {let playerInput = e.target.id}
    //     else {let playerInput = e.target.id}
    //     }))

    // let playerInput = prompt("Choose, rock, paper or scissors?")
    // let roundResult = playRound(playerInput)

    // if (roundResult.includes("Win")) {
    //     playerScore += 1
    // }
    // else if (roundResult.includes("Lose")) {
    //     computerScore += 1
    // }
    // console.log(roundResult)
    // console.log(`The score is ${playerScore} to ${computerScore}`)
}

if (playerScore > computerScore) {
    console.log(`You won the game! You were first to five.`)
}
else {
    console.log("You lost the game! The computer was first to five.")
}
}

// game()


let playerScore = 0
let computerScore = 0

function gameState(e) {
    
    let displayRoundResults = document.querySelector("#roundResults")
    let displayCurrentScore = document.querySelector("#currentScore")

    let roundResult = playRound(e.target.id)

    displayRoundResults.textContent = roundResult

    if (roundResult.includes("Win")) {playerScore += 1}
    else if (roundResult.includes("Lose")) {computerScore += 1}
    
    displayCurrentScore.textContent = `The score is: ${playerScore} ${computerScore}`

    shouldGameEnd()
};


function shouldGameEnd() {
    if (playerScore == 5 || computerScore == 5) {
    let resultContainer = document.querySelector("#resultContainer")
    let gameResult = document.createElement("div")
    resultContainer.appendChild(gameResult)
    if (playerScore > computerScore) {
        gameResult.textContent = "You win the game! You were first to 5."
    }
    else {gameResult.textContent = "You lost the game! The computer was first to 5."}
    }

};

// function gameReset(e) {

// };

let resetButton = document.querySelector("#resetButton");
// resetButton.addEventListener("click", )

const btn = document.querySelectorAll("button");
btn.forEach(button => button.addEventListener("click", gameState))


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) { return "rock" }
    else if (num == 1) { return "paper" }
    else { return "scissors" }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase()
    if (playerChoice === computerSelection) {
        return `Draw! You both selected ${playerChoice}`
    }
    else if (playerChoice == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock."
    }
    else if (playerChoice == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper"
    }
    else if (playerChoice == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors!"
    }
    else if (playerChoice == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock"
    }
    else if (playerChoice == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper"
    }
    else if (playerChoice == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors"
    }
    // else return "You Lose! Rock beats Scissors"
}

// console.log(playRound("sCiSsoRs", getComputerChoice()))


// Call playRound 5 times
    // Get player input and feed it to playRound function
// Track score after each round.
// Announce winner at the end



function game() {
let playerScore = 0
let computerScore = 0

while (playerScore < 5 && computerScore < 5) {
    
    let playerInput = prompt("Choose, rock, paper or scissors?")
    let roundResult = playRound(playerInput, getComputerChoice())

    if (roundResult.includes("Win!")) {
        playerScore += 1
    }
    else if (roundResult.includes("Lose!")) {
        computerScore += 1
    }
    console.log(roundResult)
    console.log(`The score is ${playerScore} to ${computerScore}`)
}

if (playerScore > computerScore) {
    console.log(`You won the game! You were first to five.`)
}
else {
    console.log("You lost the game! The computer was first to five.")
}
}

game()

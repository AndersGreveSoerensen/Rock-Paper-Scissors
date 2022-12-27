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

console.log(playRound("sCiSsoRs", getComputerChoice()))

function game()

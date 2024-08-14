
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("choose rock, paper, or scissors").toLowerCase();
    if ((humanChoice === "rock") || (humanChoice === 'paper') || (humanChoice === 'scissors')) {
        return (humanChoice);
    } else ((humanChoice !== "rock") || (humanChoice !== 'paper') || (humanChoice !== 'scissors')); {
        return ("Invalid answer. Try again");

    }
}


let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock") && (computerChoice === "scissors") ||
        (humanChoice === "paper") && (computerChoice === "rock") ||
        (humanChoice === "scissors") && (computerChoice === "paper")) {
        humanScore++;
        currentRound++;
        console.log("you chose: " + humanChoice);
        console.log("they chose: " + computerChoice);
        console.log(`you win, ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === computerChoice) {
        currentRound++;
        console.log("you chose: " + humanChoice);
        console.log("they chose: " + computerChoice);
        console.log("You tied, go again.");
    }
    else {
        computerScore++;
        currentRound++;
        console.log("you chose: " + humanChoice);
        console.log("they chose: " + computerChoice);
        console.log(`you lose, ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Game over! Your score: ${humanScore}. Computer score: ${computerScore}. `);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }


}

// console.log(playGame()); // 



for (let i = 2; i < 11; i + 2)
    console.log(i);











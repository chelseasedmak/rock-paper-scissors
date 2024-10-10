let humanScore = 0;
let computerScore = 0;
let currentRound = 1;


//function to get computer choice
function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}



//function to play round
function playRound(humanChoice, computerChoice) {
    let result = '';

    if ((humanChoice === "Rock") && (computerChoice === "Scissors") ||
        (humanChoice === "Paper") && (computerChoice === "Rock") ||
        (humanChoice === "Scissors") && (computerChoice === "Paper")) {
        humanScore++;
        result = `You win this round! ${humanChoice} beats ${computerChoice}.`;

    } else if (humanChoice === computerChoice) {
        result = ("You tied, go again.");
    }
    else {
        computerScore++;
        result = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }

    currentRound++;
    return result;
}

//function to update score + round 
function updateScore() {
    document.getElementById('round').textContent = `Round: ${currentRound - 1}`;
    document.getElementById('score').textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
}


//function to play game
function playGame(humanChoice) {


    if (currentRound <= 5) {
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);

        document.getElementById('result').textContent = roundResult;
        updateScore();

        if (currentRound > 5) {
            let finalResult = '';
            if (humanScore > computerScore) {
                finalResult = "You win the game!";
            } else if (computerScore > humanScore) {
                finalResult = "You lose the game!";
            } else {
                finalResult = "You tied!";
            }
            document.getElementById('result').textContent = `GAME OVER! ${finalResult}`;
        }
    }
}


document.getElementById('rockBtn').addEventListener('click', () => playGame('Rock'));
document.getElementById('paperBtn').addEventListener('click', () => playGame('Paper'));
document.getElementById('scissorsBtn').addEventListener('click', () => playGame('Scissors'));





























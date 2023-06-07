const rockSelection = document.querySelector('.rock')
const paperSelection = document.querySelector('.paper')
const scissorsSelection = document.querySelector('.scissors')


let playerScoreDisplay = document.querySelector('#playerScoreDisplay')
let computerScoreDisplay = document.querySelector('#computerScoreDisplay')

const currentWeaponPlayer = document.querySelector('.current-weapon.you')
const currentWeaponComputer = document.querySelector('.current-weapon.computer')

const winLooseMessage = document.querySelector('.weapon-win')
const xBeatsY = document.querySelector('.instructions.beats')



function getComputerChoice () {

    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if ( randomNumber === 0) {
        computerChoice = "rock";
    } else if ( randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    };

    return computerChoice;
}


function getPlayerSelection () {
//    rockSelection.addEventListener("click", () => {return playRound("rock", getComputerChoice())});
//    paperSelection.addEventListener("click", () => {return playRound("paper", getComputerChoice())});
//    scissorsSelection.addEventListener("click", () => {return playRound("scissors", getComputerChoice())});
    rockSelection.onclick = () => {return playRound("rock", getComputerChoice())}
}


function playRound (playerWeapon, computerWeapon) {

    let roundWinner;

    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;    

    if (playerWeapon == "rock" && computerWeapon == "scissors") {
        roundWinner = "player";
        xBeatsY.textContent = "Rock beats scissors, you win!";
    } else if (playerWeapon == "scissors" && computerWeapon == "paper") {
        roundWinner = "player";
        xBeatsY.textContent = "Scissors beats paper, you win!";
    } else if (playerWeapon == "paper" && computerWeapon == "rock") {
        roundWinner = "player";
        xBeatsY.textContent = "Paper beats rock, you win!";
    } else if (playerWeapon == "scissors" && computerWeapon == "rock") {
        roundWinner = "computer";
        xBeatsY.textContent = "Rock beats scissors, you lose!";
    } else if (playerWeapon == "paper" && computerWeapon == "scissors") {
        roundWinner = "computer";
        xBeatsY.textContent = "Scissors beats paper, you lose!";
    } else if (playerWeapon == "rock" && computerWeapon == "paper") {
        roundWinner = "computer";
        xBeatsY.textContent = "Paper beats rock, you lose!";
    } else {
        roundWinner = "draw";
        xBeatsY.textContent = "Draw!";
    }

    if (roundWinner === "computer") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else if (roundWinner === "player") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } 

    
    return roundWinner
}

function playGame () {

    let computerScore = 0;
    let playerScore = 0;

    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;

    for (let i = 0; i < 5 ; i++) {

        playRound(getPlayerSelection, getComputerChoice)
        if (winner === "computer") {
            computerScore++;
            computerScoreDisplay.textContent += 1;
        } else if (winner === "player") {
            playerScore++;
            playerScoreDisplay.textContent += 1;
        } 
    }

    if (computerScore > playerScore) {
        xBeatsY.textContent = "Computer Won The Game!"
    } else if (computerScore < playerScore) {
        xBeatsY.textContent = "You Won The Game!"
    } else {
        xBeatsY.textContent = "Draw!"
    }
}


let computerScore = 0;
let playerScore = 0;

rockSelection.addEventListener("click", () => {return playRound("rock", getComputerChoice())});
paperSelection.addEventListener("click", () => {return playRound("paper", getComputerChoice())});
scissorsSelection.addEventListener("click", () => {return playRound("scissors", getComputerChoice())});

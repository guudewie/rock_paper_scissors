const rockSelection = document.querySelector('.rock')
const paperSelection = document.querySelector('.paper')
const scissorsSelection = document.querySelector('.scissors')


const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');

const currentWeaponPlayer = document.querySelector('.current-weapon.you')
const currentWeaponComputer = document.querySelector('.current-weapon.computer')

const winLooseMessage = document.querySelector('.weapon-win')
const xBeatsY = document.querySelector('.instructions.beats')

const modal = document.querySelector('#myModal')

const rockEmoji ="👊";
const paperEmoji = "✋";
const scissorsEmoji = "✌";


rockSelection.addEventListener("click", () => {return playGame("rock")});
paperSelection.addEventListener("click", () => {return playGame("paper")});
scissorsSelection.addEventListener("click", () => {return playGame("scissors")});

let computerScore = 0;
let playerScore = 0;


function playGame(playerSelection){

    if (computerScore === 5 || playerScore === 5) {
        openModal()
    }

    roundWinner = playRound(playerSelection, getComputerChoice())
    updateCount(roundWinner)
    
    if (computerScore === 5 || playerScore === 5) {
        openModal()
    }

}

function openModal () {
    modal.style.display = "block";

}

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

function updateCount (roundWinner) {

    if (roundWinner === "computer") {
        computerScore++;
    } else if (roundWinner === "player") {
        playerScore++;
    } 

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}


// plays round based on click event; displays who won, updates cound and updates current weapon emojis
function playRound (playerWeapon, computerWeapon) {   

    updateComputerChoiceEmoji(computerWeapon)
    updatePlayerChoiceEmoji(playerWeapon)
    

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

    return roundWinner

}

function updateComputerChoiceEmoji(computerChoice) {

    if (computerChoice === "rock") {
        currentWeaponComputer.textContent = rockEmoji;
    } else if (computerChoice === "paper") {
        currentWeaponComputer.textContent = paperEmoji;
    } else {
        currentWeaponComputer.textContent = scissorsEmoji;
    }
}

function updatePlayerChoiceEmoji(playerChoice) {

    if (playerChoice === "rock") {
        currentWeaponPlayer.textContent = rockEmoji;
    } else if (playerChoice === "paper") {
        currentWeaponPlayer.textContent = paperEmoji;
    } else {
        currentWeaponPlayer.textContent = scissorsEmoji;
    }
}











///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

/*
function resetScores(){
    computerScore = 0;
    playerScore = 0;
}


function declareWinner(){

    if (computerScore >= 5 || playerScore >= 5) {
        if (computerScore > playerScore) {
            xBeatsY.textContent = "Computer Won The Game!"
            winLooseMessage.textContent = "The machines take over"
            resetScores()
        } else if (computerScore < playerScore) {
            xBeatsY.textContent = "You Won The Game!"
            winLooseMessage.textContent = "Congratulations"
            resetScores()
        }
    }

}

*/
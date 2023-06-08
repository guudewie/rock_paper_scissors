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
const modalWindow = document.querySelector('.modal-content')
const winner = document.querySelector('.winner')
const playAgainButton = document.querySelector(".playAgain")

const indexStartGame = document.querySelector('.start-game')
const skinPicker = document.querySelector('#skin-picker')
const indexContainer = document.querySelector('.index-container')
const optionYellow = document.querySelector('.optionYellow')

const rockEmoji ="👊";
const paperEmoji = "✋";
const scissorsEmoji = "✌";


// set emoji color based on input

skinPicker.addEventListener("change", () => {return changeEmojiColor(skinPicker.value)})


function changeEmojiColor(color) {
    
    switch (color){
        case "yellow":
            indexContainer.style.cssText = "background-image: url(./images/skin_color_yellow.png);"
            break;
        
        case "white":
            indexContainer.style.cssText = "background-image: url(./images/skin_color_white.png);"
            break;
        
        case "brown":
            indexContainer.style.cssText = "background-image: url(./images/skin_color_brown.png);"
    }

}




rockSelection.addEventListener("click", () => {return playGame("rock")});
paperSelection.addEventListener("click", () => {return playGame("paper")});
scissorsSelection.addEventListener("click", () => {return playGame("scissors")});

playAgainButton.addEventListener("click", () => {return playAgain()})

let computerScore = 0;
let playerScore = 0;


function playGame(playerSelection){

    if (computerScore === 5 || playerScore === 5) {
        openModalWithMessage()
    }

    roundWinner = playRound(playerSelection, getComputerChoice())
    updateCount(roundWinner)
    
    if (computerScore === 5 || playerScore === 5) {
        openModalWithMessage(roundWinner)
    }

}

function openModalWithMessage (roundWinner) {
    modal.style.display = "block";
    
    switch (roundWinner) {
        case "computer":
            modalWindow.style.cssText = "background-image: url(./images/loose_modal.png);"
            winner.textContent = "Computer Won The Game!"
            break;

        case "player":
            modalWindow.style.cssText = "background-image: url(./images/win_modal.png);"
            winner.textContent = "You Won The Game!"
    }
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

function playAgain () {

    // reset scores
    computerScore = 0;
    playerScore = 0;

    // reset score display
    computerScoreDisplay.textContent = 0;
    playerScoreDisplay.textContent = 0;

    // reset current weapon display
    currentWeaponComputer.textContent = "🤛";
    currentWeaponPlayer.textContent = "🤜";

    // reset instructions
    winLooseMessage.textContent = "Choose your Weapon!"
    xBeatsY.textContent = "First to 5 wins the Game."

    // close modal
    modal.style.display = "none";
}


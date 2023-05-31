/*

player selection
    Promt Rock Paper or Scissors

computer selection
    Randomly select Rock Paper or Scissors

Play game
    run player selection
    run computer selection
    calculate winner
        rock > scissors
        scissors > paper
        paper > rock
        x === x = draw
    console.log winner
    update player / computer score
    
LOOP 5 times
    play game

    declare winner

*/

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

    let promptSelection = prompt("Please enter your weapon: ");
    return promptSelection.toLowerCase()
}


function playRound (playerWeapon, computerWeapon) {

    let roundWinner;    

    if (playerWeapon == "rock" && computerWeapon == "scissors") {
        roundWinner = "player";
        console.log("Rock beats scissors, you win!");
    } else if (playerWeapon == "scissors" && computerWeapon == "paper") {
        roundWinner = "player";
        console.log("Scissors beats paper, you win!");
    } else if (playerWeapon == "paper" && computerWeapon == "rock") {
        roundWinner = "player";
        console.log("Paper beats rock, you win!");
    } else if (playerWeapon == "scissors" && computerWeapon == "rock") {
        roundWinner = "computer";
        console.log("Rock beats scissors, you lose!");
    } else if (playerWeapon == "paper" && computerWeapon == "scissors") {
        roundWinner = "computer";
        console.log("Scissors beats paper, you lose!");
    } else if (playerWeapon == "rock" && computerWeapon == "paper") {
        roundWinner = "computer";
        console.log("Paper beats rock, you lose!");
    } else {
        roundWinner = "draw";
        console.log("Draw!");
    }
    
    return roundWinner
}


function playGame () {

    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5 ; i++) {

        console.log("*********** ROUND " + (i + 1) + " ***********")
        
        let winner = playRound(getPlayerSelection(), getComputerChoice())

        if (winner === "computer") {
            computerScore++
        } else if (winner === "player") {
            playerScore++
        } 
        
        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + computerScore)

    }

    console.log("*********** FINAL STATISTIC ***********")

    if (computerScore > playerScore) {
        console.log("Computer Won The Game!")
    } else if (computerScore > playerScore) {
        console.log("You Won The Game!")
    } else {
        console.log("Draw!")
    }
}

console.log(playGame())

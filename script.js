// Global variables to decide who won a round 
let playerWins = false;
let computerWins = false;
let playerScore = 0;
let computerScore = 0;
let numberOfGames = 0;

// Computer choice
function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    let randNumber = Math.floor(Math.random()*3);
    return options[randNumber];
}

// Player Choice 
let playerAns;
const buttonRock = document.querySelector(".rock");
buttonRock.addEventListener('click', () => {
    playerAns = "Rock" 
    game();
});

const buttonPaper = document.querySelector(".paper");
buttonPaper.addEventListener("click", () => {
    playerAns = "Paper";
    game();
});

const buttonScissors = document.querySelector(".scissors");
buttonScissors.addEventListener("click", () => {
    playerAns = "Scissors";
    game();
});

// Play a single round 
function playRound(playerSelection, computerSelection){
    if( (playerSelection.toUpperCase() === "ROCK" && computerSelection === 'Scissors') || 
            (playerSelection.toUpperCase() === "PAPER" && computerSelection === 'Rock') ||
            (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === 'Paper')) {
        playerScore++;
        return playerWins = true; 
    } 
    if( (playerSelection.toUpperCase() === "ROCK" && computerSelection === 'Paper') || 
            (playerSelection.toUpperCase() === "PAPER" && computerSelection === 'Scissors') ||
            (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === 'Rock') ) {
        computerScore++;
        return computerWins = true;
    }
}

// Choose ans and score item outside function cause needs functionality outside of game function 
const ans = document.querySelector(".ans");
const score = document.querySelector(".score");

// Play a game until somebody wins with 5
function game(){
    // Initialize answers
    let computerAns = computerPlay();

    // Play single round
    playRound(playerAns, computerAns);
    if(playerWins){
        ans.textContent = `Player won with ${playerAns}`;
        ans.setAttribute("style", "background-color: green");
        // ans.classList.remove('.')
    } 

    if (computerWins) {
        ans.textContent = `Computer won with ${computerAns}`;
        ans.style.backgroundColor = "red"; // Different inline method
    } 

    if(!playerWins && !computerWins){
        ans.textContent = `A tie with ${playerAns}`;
        ans.setAttribute("style", "background-color: grey");
    }

    score.textContent = `${playerScore} vs ${computerScore}`;
    
    // End of game 
    if(playerScore === 5){
        ans.textContent = `The game is over! \n Player won!`
        ans.setAttribute("style", "background-color: green");
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
        return 
    } else if(computerScore === 5){
        ans.textContent = `The game is over! \n Computer won!`
        ans.setAttribute("style", "background-color: red")
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
        return 
    } 

    // Reset the round winner 
    playerWins = false; 
    computerWins = false;
    numberOfGames++;
}



const newGame = document.querySelector(".new-game");
newGame.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    score.textContent = `${playerScore} vs ${computerScore}`;
    ans.textContent = "";
    ans.setAttribute("style", "background-color: whitesmoke");
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
});


// The player selects their choice of the game, rock paper scissors
// After the click the computer automatically starts the game 
// The end result of the round is shown on the screen 
// The player plays more rounds until either the computer or the player wins
// The end result of the game is shown 
// Optional new game to be played

// TODO make the buttons animated 
// TODO get images for rock, paper and scissors 
let getComputerChoice = () => {
    let temp1 = Math.floor(Math.random()*3);
    if(temp1 == 0){
        return "rock";
    }
    else if (temp1==1){
        return "paper";
    }
    else if(temp1==2){
        return "scissors";
    }
    else {
        return "something's wrong with the math.random calculation";
    }
}

let gameRound = (playerSelection, computerSelection) => {

    if(playerSelection=="rock"){
        if(computerSelection=="rock"){
            return "Rock vs Rock! A draw!";
        }
        else if(computerSelection=="paper"){
            return "Rock vs Paper! Computer wins!";
        }
        else if(computerSelection=="scissors"){
            return "Rock vs Scissors! You win!";
        }
        else{
            return "Error! Something went wrong!";
        }
    }
    else if(playerSelection=="paper"){
        if(computerSelection=="paper"){
            return "Paper vs Paper! A draw!";
        }
        else if(computerSelection=="rock"){
            return "Paper vs Paper! You win!";
        }
        else if(computerSelection=="scissors"){
            return "Paper vs Scissors! Computer wins!";
        }
        else{
            return "Error! Something went wrong!";
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="paper"){
            return "Scissors vs Paper! You win!";
        }
        else if(computerSelection=="rock"){
            return "Scissors vs Rock! Computer wins!";
        }
        else if(computerSelection=="scissors"){
            return "Scissors vs Scissors! A draw!";
        }
        else{
            return "Error! Something went wrong!";
        }
    }
    else{
        return "Error!! Something went wrong!";
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
let playerScoreNumber = 0;
let computerScoreNumber = 0;

rock.addEventListener('click', () => {
    results.textContent=gameRound('rock', getComputerChoice());

    if(results.textContent.at(-2)=="n"){
        playerScoreNumber++;
    }
    else if(results.textContent.at(-2)=="s"){
        computerScoreNumber++;
    }
    playerScore.textContent='Player Score: ' + playerScoreNumber;
    computerScore.textContent='Computer Score: ' + computerScoreNumber;
    if(playerScoreNumber==5){
        results.textContent='You Won!!!';
        playerScoreNumber=0;
        computerScoreNumber=0;
    }
    else if(computerScoreNumber==5){
        results.textContent='You Lost!!!';
        playerScoreNumber=0;
        computerScoreNumber=0;
    }
});
paper.addEventListener('click', () => {
    results.textContent=gameRound('paper', getComputerChoice());

    if(results.textContent.at(-2)=="n"){
        playerScoreNumber++;
    }
    else if(results.textContent.at(-2)=="s"){
        computerScoreNumber++;
    }
    playerScore.textContent='Player Score: ' + playerScoreNumber;
    computerScore.textContent='Computer Score: ' + computerScoreNumber;
    if(playerScoreNumber==5){
        results.textContent='You Won!!!';
        playerScoreNumber=0;
        computerScoreNumber=0;
    }
    else if(computerScoreNumber==5){
        results.textContent='You Lost!!!';
        playerScoreNumber=0;
        computerScoreNumber=0;
    }
});
scissors.addEventListener('click', () => {
    results.textContent=gameRound('scissors', getComputerChoice());

    if(results.textContent.at(-2)=="n"){
        playerScoreNumber++;
    }
    else if(results.textContent.at(-2)=="s"){
        computerScoreNumber++;
    }
    playerScore.textContent='Player Score: ' + playerScoreNumber;
    computerScore.textContent='Computer Score: ' + computerScoreNumber;
    if(playerScoreNumber==5){
        results.textContent='You Won!!!';
        playerScoreNumber=0;
        computerScoreNumber=0;
    }
    else if(computerScoreNumber==5){
        results.textContent='You Lost!!!';
        playerScoreNumber=0;
        computerScoreNumber=0;
    }
});


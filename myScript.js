let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    
    if (num <= 0.333) {
        return "Rock";
    } else if (num > 0.333 && num <= 0.666) {
        return "Paper";
    }  
        return "Scissors";
}

function getHumanChoice() {
    let choice = prompt("Choose: rock, paper, or scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice) {

}

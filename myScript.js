let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    
    if (num <= 0.333) {
        return "rock";
    } else if (num > 0.333 && num <= 0.666) {
        return "paper";
    }  
        return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Choose: rock, paper, or scissors?");
    if (choice == null) {
        console.log("You can't escape.");
        return getHumanChoice();
    }
    
    let c = choice.toLowerCase();
    if (c === "rock" || c === "paper" || c === "scissors") {
        return c;
    } else {
        console.log("Invalid input. Try again!");
        return getHumanChoice();
    }
}



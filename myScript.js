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
    let choice = prompt("Choose: rock, paper, or scissors?")
    let answer = choice.toLowerCase();  

    return answer;
}

console.log(getHumanChoice());
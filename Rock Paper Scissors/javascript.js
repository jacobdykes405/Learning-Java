const choices = ['rock','paper','scissors']

function game(){

}

function playRound(){
const playerSelection = playerChoice();
const computerSelection = computerChoice();

}

function playerChoice () {
let input = prompt("Rock, Paper, Scissors ?")
input = input.toLowerCase();
return input
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}
// Constants for the game //

const choices = ['rock','paper','scissors']
 
// Prompts User for rock paper or scissors //

function playerChoice () {
let myChoice = prompt("Rock, Paper, Scissors ?")
myChoice = myChoice.toLowerCase();
return myChoice
}

// Generates a random answer //

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}

// plays a single round of Rock Paper Scissors

function playRound(spot1, spot2){
    if (spot1 == "rock" && spot2 == "paper") {
        console.log('Loose, Paper beats rock!');
    }else if (spot1 == "rock" && spot2== "scissors") {
        console.log('Win, Rock beats Scissors!');
    }else if (spot1 == "paper" && spot2== "scissors") {
        console.log('Loose, Scissor beats paper!');
    }else if (spot1 == "paper" && spot2 == "rock") {
        console.log("Win, Paper beats rock!");
    }else if (spot1 == "scissors" && spot2 == "rock"){
        console.log("Loose, Rock beats Scissors!");
    } else if (spot1 == 'scissors' && spot2 === 'paper'){
        console.log('Win, Scissors beats paper!');
    }else if (spot1 == spot2){
        console.log("tie");
    }
}
//plays five rounds of rock paper scissors

function playGame(){
    for (i=1; i<=5; i++) {
        playRound(playerChoice(), computerChoice());
    }
}

playGame()
   

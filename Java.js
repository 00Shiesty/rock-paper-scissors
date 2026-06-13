function playGame () {
 humanScore = 0 
computerScore = 0 
   for (let i = 1; i <= 5; i++) {
  let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound ( humanSelection, computerSelection);
console.log ("score: human" + humanScore + " | computer" + computerScore);
} 
if (humanScore > computerScore) {
    console.log ("you win pimp")
   }   else if ( humanScore < computerScore) {
     console.log ("you lose bro")
   } else  {humanScore === computerScore 
    console.log("its a tie")
   }
}




function playRound(humanChoice, computerChoice) { 
    //code goes here 
    if (humanChoice === "rock" && computerChoice === "scissors") {
     console.log( " you win")
    humanScore++
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log( " you win")
   humanScore++
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
   console.log( " you win")
   humanScore++
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log( " you lose")
   computerScore++
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log( " you lose") 
   computerScore++
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log( " you lose")
   computerScore++
}   
     else if (humanChoice === computerChoice) {
    console.log( "draw" )
     }
}
function getComputerChoice() {
let  random = Math.floor (Math.random() * 3 ) + 1 
if (random === 1 ) {
    return "rock"
}  else if (random === 2 ) {
    return "paper"
}  else  if (random === 3 ) {
    return "scissors"
}
}
function getHumanChoice ()  {
let humanSelection = window.prompt("rock paper or scissors").toLowerCase();  
return humanSelection
}


playGame ();


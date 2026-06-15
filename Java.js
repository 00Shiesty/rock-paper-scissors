let humanScore = 0
let computerScore = 0 


let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
})
scissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
})
paper.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
})

const results = document.createElement("div")
    results.classList.add("results")
    document.body.appendChild(results);





function playRound(humanChoice, computerChoice) { 
    if (humanScore === 5) {
        results.textContent = ' yo you actually won the game'
    }
    if (computerScore === 5 ) {
        results.textContent = 'yo you lost im sorry'
    }
    if (humanScore === 5 || computerScore === 5 ) {
        return
    }
    
    
    
    if (humanChoice === "rock" && computerChoice === "scissors") {
     results.textContent = `hey you win, score: you ${humanScore} | computer ${computerScore}`
    humanScore++
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
    results.textContent = `hey you win, score: you ${humanScore} | computer ${computerScore}`
   humanScore++
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
     results.textContent = `hey you win, score: you ${humanScore} | computer ${computerScore}`
   humanScore++
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
    results.textContent = `oh no you lose, score: you ${humanScore} | computer ${computerScore}`
    computerScore++
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
    results.textContent = `oh no you lose, score: you ${humanScore} | computer ${computerScore}`
   computerScore++
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
    results.textContent = `oh no you lose, score: you ${humanScore} | computer ${computerScore}`
   computerScore++
}   
     else if (humanChoice === computerChoice) {
    results.textContent = `wow a draw, score: you ${humanScore} | computer ${computerScore}`
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
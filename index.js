const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
  const choice = options[Math.floor(Math.random() * options.length)];  
  return choice
}

function checkWinner(playerSelection, computerSelection) {
  if(playerSelection == computerSelection){
    return "Tie";
  }
  else if(
    (playerSelection == "rock" && computerSelection ==  "scissors") ||
    (playerSelection == "scissors" && computerSelection ==  "paper") ||
    (playerSelection == "paper" && computerSelection ==  "rock") 

  ){
    return "Player";
  }
  else {
    return "Computer";
  }
  
}

function playRound(playerSelection, computerSelection) {
const result = checkWinner(playerSelection, computerSelection); 
if(result == "Tie"){
  return "It's s Tie!"
}
else if(result == "Player"){
  return `You win! ${playerSelection} beats ${computerSelection}`
}
else{
  return `You loose! ${computerSelection} beats ${playerSelection}` 
}
}

function getPlayerChoice() {
  let validateInput = false;
  while(validateInput == false){
    const choice = prompt("Lets Play");
    if(choice == null){
      continue; 
    }
    const choiceInLower = choice.toLocaleLowerCase();
    if(options.includes(choiceInLower)){
      validateInput = true;
      return choiceInLower;
    }
  }
  
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("---------");
    if(checkWinner(playerSelection, computerSelection) == "Player"){
      scorePlayer++;
    } 
    else if(checkWinner (playerSelection, computerSelection) == "Compurer") {
      scoreComputer++;
    } 
  }
  console.log("Game over")
  if(scorePlayer > scoreComputer){
    console.log("You win!")
  }
  else if(scorePlayer < scoreComputer){
    console.log("You loose!");
  }
  else {
    console.log("We Tie!")
  }
} 

game(); 


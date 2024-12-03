function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
    return computerChoice;
  }

  function getHumanChoice() {
    let humanChoice = prompt("Lets Play");
    let result = humanChoice.toLowerCase();
    return result
  
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "it's a tie replay this round";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      return `You lose! paper beats rock`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      return `You win! rock beats scissors`;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      return `You lose!scissors beats paper`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      return `You win! paper beats rock`;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      return `You lose! rock beats scissors`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      return `You win! scissors beats paper`;
    }
  }

  function game() {
    let computerScore = 0,
      playerScore = 0;

     for (i = 0; i < 5; i++) {
      const result = playRound (getHumanChoice(), getComputerChoice());
      if (result.includes("win")) {
        playerScore++;
        console.log(`computer: ${computerScore} | player: ${playerScore}`);
      } else if (result.includes("lose")) {
        computerScore++;
        console.log(`computer: ${computerScore} | player: ${playerScore}` );
      }
      console.log(
        "Final Result: Player: " + playerScore + " Computer: " + computerScore
      );
      if (playerScore > computerScore) {
        console.log("You win the game!.");
      } else if  (playerScore < computerScore) {
        console.log("You loose the game!");
      } else {
        console.log("The game is a tie!");
      }
      }
     }
    
  game();
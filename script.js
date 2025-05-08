const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const resultDiv = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resetButton = document.getElementById("reset");

let userScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, result);
    updateScore(result);
  });
});

resetButton.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  updateScoreDisplay();
  resultDiv.textContent = "Make your move!";
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function displayResult(user, computer, result) {
  if (result === "draw") {
    resultDiv.textContent = `🤝 It's a draw! You both chose ${user}.`;
  } else if (result === "win") {
    resultDiv.textContent = `✅ You win! ${user} beats ${computer}.`;
  } else {
    resultDiv.textContent = `❌ You lose! ${computer} beats ${user}.`;
  }
}

function updateScore(result) {
  if (result === "win") userScore++;
  if (result === "lose") computerScore++;
  updateScoreDisplay();
}

function updateScoreDisplay() {
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
}

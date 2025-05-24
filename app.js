const startBtn = document.getElementById("start-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const gameContainer = document.getElementById("game-container");
startBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  gameContainer.style.display = "block";
});

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "It's a Draw !";
  msg.style.backgroundColor = "#081b31";
  document.getElementById("drawSound").play();
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    document.getElementById("winSound").play();
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose ! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    document.getElementById("loseSound").play();
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissors" ? false : true;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

document.querySelector("#reset-btn").addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#081b31";
});

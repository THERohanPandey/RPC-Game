// Initialize variables to keep track of user and computer scores
let userScore = 0;
let compScore = 0;

// Select all elements with class "choice" and store them in a NodeList
const choices = document.querySelectorAll(".choice");

// Select the element with id "msg" and store it in a variable
const msg = document.querySelector("#msg");

// Select the elements with id "user-score" and "comp-score" and store them in variables
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer's choice (rock, paper, or scissors)
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2
  return options[randIdx]; // Return the option corresponding to the random index
};

// Function to handle the case when the game is drawn
const drawGame = () => {
  // Update message text and background color
  msg.innerText = "Game was drawn. Play again.";
  msg.style.backgroundColor = "blue";
};

// Function to show the winner of the game and update scores accordingly
const showWinner = (userWin, userChoice, compChoice) => {
  // If user wins
  if (userWin) {
    // Increment user's score and update corresponding HTML element
    userScore++;
    userScorePara.innerText = userScore;

    // Update message text to indicate user win and change background color to green
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    // If computer wins
    // Increment computer's score and update corresponding HTML element
    compScore++;
    compScorePara.innerText = compScore;

    // Update message text to indicate user loss and change background color to red
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Function to play the game given the user's choice
const playGame = (userChoice) => {
  // Generate computer's choice
  const compChoice = genCompChoice();

  // If user and computer choices are the same, the game is drawn
  if (userChoice === compChoice) {
    drawGame();
  } else {
    // If there's a winner
    let userWin = true;

    // Determine the winner based on user and computer choices
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true; // Fix this line (should be userWin = compChoice === "rock" ? false : true)
    }

    // Show the winner and update scores
    showWinner(userWin, userChoice, compChoice);
  }
};

// Add click event listeners to all elements with class "choice"
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // Get the id attribute of the clicked choice and pass it to the playGame function
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

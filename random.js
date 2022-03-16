let arr = ["rock", "paper", "scissors"];
let val;
let computerPlayer;
let userScore = 0;
let computerScore = 0;
// let btn = document.getElementById("generateRandom");
// btn.addEventListener("click", generate);
function generate() {
  for (let i = 0; i < arr.length; i++) {
    val = Math.floor(Math.random() * arr.length);
    computerPlayer = arr[val];
  }
  console.log(computerPlayer);
}
// let play = document.getElementById("play");

// play.addEventListener("click", playUser)

let computerP;
let uscore;
let cscore;
function playUser() {
  let userInp = document.getElementById("userInp").value.toLowerCase();
  cscore = document.querySelector(".cscore");
  uscore = document.querySelector(".uscore");
  computerP = document.querySelector(".computerP");
  if (userInp === computerPlayer) {
    console.log("Tie", computerPlayer);
    userScore += 0;
    computerScore += 0;

    computerP.innerHTML = ` Computers choice : ${computerPlayer}`;

    uscore.innerHTML = `User Score : ${userScore}`;

    cscore.innerHTML = `Computer Score : ${computerScore}`;
  }
  if (userInp === "rock") {
    if (computerPlayer === "paper") {
      console.log("User lose", computerPlayer);
      computerP.innerHTML = ` Computers choice : ${computerPlayer}`;
      computerScore = computerScore + 1;
      uscore.innerHTML = `User Score : ${userScore}`;

      cscore.innerHTML = `computer Score :${computerScore}`;
    } else if (computerPlayer === "scissors") {
      console.log("User win", computerPlayer);
      userScore = userScore + 1;
      computerP.innerHTML = ` Computers choice : ${computerPlayer}`;
      uscore.innerHTML = `User Score : ${userScore}`;

      cscore.innerHTML = `computer Score :${computerScore}`;
    }
  }
  if (userInp === "paper") {
    if (computerPlayer === "scissors") {
      console.log("User lose", computerPlayer);
      computerScore = computerScore + 1;
      computerP.innerHTML = ` Computers choice : ${computerPlayer}`;
      uscore.innerHTML = `User Score : ${userScore}`;

      cscore.innerHTML = `computer Score :${computerScore}`;
    } else if (computerPlayer === "rock") {
      console.log("User win", computerPlayer);
      userScore = userScore + 1;
      computerP.innerHTML = ` Computers choice : ${computerPlayer}`;
      uscore.innerHTML = `User Score : ${userScore}`;

      cscore.innerHTML = `computer Score :${computerScore}`;
    }
  }
  if (userInp === "scissors") {
    if (computerPlayer === "paper") {
      console.log("User Wins", computerPlayer);
      userScore = userScore + 1;
      computerP.innerHTML = ` Computers choice : ${computerPlayer}`;
      uscore.innerHTML = `User Score : ${userScore}`;

      cscore.innerHTML = `computer Score :${computerScore}`;
    } else if (computerPlayer === "rock") {
      console.log("User lose", computerPlayer);
      computerScore = computerScore + 1;
      computerP.innerHTML = ` Computers choice : ${computerPlayer}`;
      uscore.innerHTML = `User Score : ${userScore}`;

      cscore.innerHTML = `computer Score :${computerScore}`;
    }
  }
  if (userInp !== "rock" && userInp !== "paper" && userInp !== "scissors") {
    alert("Invalid Input or ");
  }
}
function exit() {
  let userDisplay = document.querySelector(".exitDisplay");
  if (userScore > computerScore) {
    console.log(`User score : ${userScore}`);
    console.log("User Wins!!!!");
    console.log(`User score : ${computerScore}`);
    userDisplay.innerHTML = `Userscore : ${userScore} **User Wins** Computer Score : ${computerScore}`;
  } else if (computerScore > userScore) {
    console.log(`User score : ${userScore}`);
    console.log("Life is unfair!!!!");
    console.log(`User score : ${computerScore}`);
    userDisplay.innerHTML = `Computer Score : ${computerScore} **Computer Wins** User Score : ${userScore}`;
  } else {
    console.log(`User score : ${userScore}`);
    console.log("Match Tied!!!");
    console.log(`User score : ${computerScore}`);
    userDisplay.innerHTML = `Match tied with ${userScore} scores`;
  }
}

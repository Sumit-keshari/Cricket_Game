// All js code write in cricket.js.
let computer_choice;
function randomchoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computer_choice = "Stumps";
  } else if (randomNumber == 1) {
    computer_choice = "Bat";
  } else {
    computer_choice = "Bowl";
  }
  return computer_choice;
}
function getResult(userMove) {
  if (userMove === "Bat") {
    if (computer_choice === "Stumps") {
      score.lost++;
      return "Computer Won";
    } else if (computer_choice === "Bat") {
      score.tie++;
      return "it is tie";
    } else {
      score.win++;
      return "User Won";
    }
  } else if (userMove === "Bowl") {
    if (computer_choice === "Stumps") {
      score.win++;
      return "User Won";
    } else if (computer_choice === "Bat") {
      score.lost++;
      return "Computer Won";
    } else {
      score.tie++;
      return "it is tie";
    }
  } else {
    if (computer_choice === "Stumps") {
      score.tie++;
      return "it is tie";
    } else if (computer_choice === "Bat") {
      score.win++;
      return "User Won";
    } else {
      score.lost++;
      return "Computer won";
    }
  }
}
function alerts(results, computer_ch, user_ch) {
  // console.log(score);
  localStorage.setItem("score", JSON.stringify(score));
  alert(
    `You choose : ${results}\nComputer choose : ${computer_ch} \n${user_ch} \n\nWon : ${score.win}\nLost: ${score.lost}\nTie: ${score.tie}`
  );
}

let score1 = localStorage.getItem('score');
let score = JSON.parse(score1)||{
  win: 0,
  lost: 0,
  tie: 0,
};
function resetbtn(){
  localStorage.clear()
  score={
    win: 0,
  lost: 0,
  tie: 0,
  }
}

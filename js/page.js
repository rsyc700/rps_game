var pscore=0;
var oscore=0;
var pscore_span=document.getElementById('pscore');
var oscore_span=document.getElementById('oscore');
var scoreboard_div=document.querySelector('.scoreboard');
const result_div=document.querySelector(".result >p");
const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissors=document.getElementById('scissors');

const imgs = ["svg/rock.svg", "svg/paper.svg", "svg/scissors.svg"];

function reset(){
  pscore=0;
  oscore=0;
  pscore_span.innerHTML = pscore;
  oscore_span.innerHTML=oscore;
  display_result("Choose a move to play!");
}
function getOpponentChoice() {
  const choices=['rock','paper','scissors'];
  const randomNumber= Math.floor(Math.random() *3);
  document.getElementById("question").src = imgs[randomNumber];
  return choices[randomNumber];
}

function win(){
  pscore++;
  pscore_span.innerHTML = pscore;
  oscore_span.innerHTML=oscore;
}

function lose(){
  oscore++;
  pscore_span.innerHTML = pscore;
  oscore_span.innerHTML=oscore;
}

function game(pchoice){
  const ochoice=getOpponentChoice();
  if (pchoice === ochoice) {
    return("This game is a tie!");
  }
  else if (pchoice === "rock") {
    if (ochoice === "paper") {
      lose();
      return("Paper beats Rock. You lose.");
    } else {
      win();
      return("Rock wins! You win!");
    }
  }
  else if (pchoice === "paper") {
    if (ochoice ==="scissors") {
      lose();
      return("Scissors beats Paper. You lose.");
    } else {
      win();
      return("Paper wins! You win!");
    }
  }
  else if (pchoice === "scissors") {
    if (ochoice === "rock") {
      lose();
      return("Rock beats scissors. You lose.");
    } else {
      win();
      return("Scissors wins! You win!");
    }
  }
}

function display_result(text) {
  document.getElementById('result').innerText = text;
}

function main() {
  rock.addEventListener('click', function(){
    display_result(game("rock"));
  })
  paper.addEventListener('click', function(){
    display_result(game("paper"));
  })
  scissors.addEventListener('click', function(){
    display_result(game("scissors"));
  })
  console.log("main done");

}
main();

var pscore=0;
var oscore=0;
var pscore_span=document.getElementById('pscore');
var oscore_span=document.getElementById('oscore');
var scoreboard_div=document.querySelector('.scoreboard');
const result_div=document.querySelector(".result >p");
const rock_img=document.getElementById('r-img');
const paper_img=document.getElementById('p-img');
const scissors_img=document.getElementById('s-img');

const imgs = ["svg/rock.svg", "svg/paper.svg", "svg/scissors.svg"];


function getOpponentChoice() {
  const choices=['r-img','p-img','s-img'];
  const randomNumber= Math.floor(Math.random() *3);
  document.getElementById("o-img").src = imgs[randomNumber];
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
  else if (pchoice === "r-img") {
    if (ochoice === "p-img") {
      lose();
      return("Paper beats Rock. You lose.");
    } else {
      win();
      return("Rock wins! You win!");
    }
  }
  else if (pchoice === "p-img") {
    if (ochoice ==="s-img") {
      lose();
      return("Scissors beats Paper. You lose.");
    } else {
      win();
      return("Paper wins! You win!");
    }
  }
  else if (pchoice === "s-img") {
    if (ochoice === "r-img") {
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
  rock_img.addEventListener('click', function(){
    display_result(game("r-img"));
  })
  paper_img.addEventListener('click', function(){
    display_result(game("p-img"));
  })
  scissors_img.addEventListener('click', function(){
    display_result(game("s-img"));
  })
  console.log("main done");

}
main();

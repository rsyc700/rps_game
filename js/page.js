var pscore=0;
var oscore=0;
const pscore_span=document.getElementById('pscore');
const oscore_span=document.getElementById('oscore');
const scoreboard_div=document.querySelector('.scoreboard');
const result_div=document.querySelector(".result");
const rock_img=document.getElementById('r-img');
const paper_img=document.getElementById('p-img');
const scissors_img=document.getElementById('s-img');

const imgs = ["svg/paper.svg", "svg/rock.svg", "svg/scissors.svg"];


function getOpponentChoice() {
  const choices=['r-img','p-img','s-img'];
  const randomNumber= Math.floor(Math.random() *3);
  document.getElementById("o-img").src = imgs[randomNumber];
  return choices[randomNumber];
}


function game(pchoice){
  const ochoice=getOpponentChoice();
  console.log("pchoice", pchoice, "ochoice", ochoice);
  if (pchoice === ochoice) {
    return("This game is a tie!");
  }
  else if (pchoice === "r-img") {
    if (ochoice === "p-img") {
      return("Paper Wins! You lose.");
    } else {
      return("Rock wins! You win!");
    }
  }
  else if (pchoice === "p-img") {
    if (ochoice ==="s-img") {
      return("Scissors wins! You lose.");
    } else {
      return("Paper wins! You win!");
    }
  }
  else if (pchoice === "s-img") {
    if (ochoice === "r-img") {
      return("Rock wins! You lose.");
    } else {
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

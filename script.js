var start = document.querySelector('.start_button');
var body = document.querySelector('#container');
var score = 0;
var gameCount = 0;
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
start.onclick = () => startGame();
rock.onclick = () => playRound("rock");
paper.onclick = () => playRound("paper");
scissors.onclick = () => playRound("scissors");
  function computerPlay(){
     let comp = Math.floor(Math.random()*3)
     switch(comp){
       case 0:
         return "rock";
         break;
       case 1:
         return "paper";
         break;
       case 2:
         return "scissors";
         break;
     }
  }
  function playRound(playerSelection){
    var computerSelection = computerPlay();
    gameCount += 1
    switch(playerSelection.toLowerCase()+computerSelection.toLowerCase()){
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        alert("you won this round, " + (5 - gameCount) + " games left");
        score += 1;
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        alert("you lost this round, " + (5 - gameCount) + " games left");
        score += -1;
        break;
      case "paperpaper":
      case "scissorsscissors":
      case "rockrock":
         alert("this round was a tie, " + (5 - gameCount) + " games left");
         break;
      default:
         return 0;
      } 
      if(gameCount >= 5){
          endGame();
     }
   }
   function startGame(){
     gameCount = 0;
     start.style.display = "none";
     body.style.display = "block";
     score = 0;
   }
   function endGame(){
    alert("The Game is Over!");
    if (score === 0){
     alert("It was a tie!!!");
    }else if (score > 0){
     alert("You won!");
    }else{
     alert("You lost");
    }
    body.style.display = "none";
    start.style.display = "block";
   }
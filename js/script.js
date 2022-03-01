{function playGame(playerInput){
clearMessages();

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if (argMoveId ==2) {
      return 'papier';
    }
    else if (argMoveId ==3) {
      return 'nożyce';
    }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  
  function displayResult(argComputerMove, argPlayerMove){
    
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
  
  else if(argComputerMove == argPlayerMove){
      printMessage('Remis!');
    }
  else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    }
  else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    }
  else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Przegrywasz!');
    }
  else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Przegrywasz!');
    }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrywasz!');
    }
    else printMessage('błąd');
  }


const randomNumber = Math.floor(Math.random()* 3 + 1);
const computerMove = getMoveName(randomNumber);

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

console.log('Gracz wpisał: ' + playerInput);

const playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

  console.log('moves:', computerMove, playerMove);
  displayResult (computerMove,playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
})
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
})
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}
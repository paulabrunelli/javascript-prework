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
  

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
/*let randomFraction = Math.random();
let calculation = randomFraction * 3 + 1;
let roundNumber = Math.floor(calculation); */
let randomNumber = Math.floor(Math.random()* 3 + 1);
let computerMove = getMoveName(randomNumber);

/*if (roundNumber==1) {
    computerMove='kamień';
}
else if (roundNumber==2) {
    computerMove='papier';
}
else computerMove='nożyce';*/
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput=='2'){
    playerMove = 'papier';
}
else if (playerInput=='3'){
    playerMove = 'nożyce';
}*/

playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

/*if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

else if(computerMove == playerMove){
    printMessage('Remis!');
  }
else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz!');
  }
else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz!');
  }
  else if(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz!');
  }
  else printMessage('błąd'); */

  console.log('moves:', computerMove, playerMove);
  displayResult (computerMove,playerMove);
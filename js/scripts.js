function Player (mark) {
  this.mark = mark;
}

playerX = new Player("X");
playerO = new Player("O");

var currentPlayer = playerX;

function switchPlayer() {
  if (currentPlayer === playerX){
    currentPlayer = playerO;
  } else {
    currentPlayer = playerX;
  }
}

function Space(position) {
  this.position = position;
  this.mark = 0;
}

space0 = new Space(0);
space1 = new Space(1);
space2 = new Space(2);
space3 = new Space(3);
space4 = new Space(4);
space5 = new Space(5);
space6 = new Space(6);
space7 = new Space(7);
space8 = new Space(8);

var board = [space0, space1, space2, space3, space4, space5, space6, space7, space8];

function isAWin() {
  if (board[0].mark === board[1].mark && board[1].mark === board[2].mark && board[2].mark !== 0) {
    return true;
  }
  if (board[3].mark === board[4].mark && board[4].mark === board[5].mark && board[5].mark !== 0) {
    return true;
  }
  if (board[6].mark === board[7].mark && board[7].mark === board[8].mark && board[8].mark !== 0) {
    return true;
  }
  if (board[0].mark === board[3].mark && board[3].mark === board[6].mark && board[6].mark !== 0) {
    return true;
  }
  if (board[1].mark === board[4].mark && board[4].mark === board[7].mark && board[7].mark !== 0) {
    return true;
  }
  if (board[2].mark === board[5].mark && board[5].mark === board[8].mark && board[8].mark !== 0) {
    return true;
  }
  if (board[0].mark === board[4].mark && board[4].mark === board[8].mark && board[8].mark !== 0) {
    return true;
  }
  if (board[2].mark === board[4].mark && board[4].mark === board[6].mark && board[6].mark !== 0) {
    return true;
  }
  return false;
}

function isADraw() {
  if (board[0].mark !== 0 && board[1].mark !== 0 && board[2].mark !== 0 && board[3].mark !== 0 && board[4].mark !== 0 && board[5].mark !== 0 && board[6].mark !== 0 && board[7].mark !== 0 && board[8].mark !== 0) {
    return true;
  }
  return false;
}

function game(spot) {
  board[spot].mark = currentPlayer.mark;
  if (isAWin()) {
    alert(currentPlayer.mark + " wins!");
  } else if (isADraw()) {
    alert("Draw!");
    location.reload();
  }
}


function makeMark(spot) {
  $(spot).text(currentPlayer.mark);
}

$(document).ready(function(){
  $(".btn").click(function(event) {
    event.preventDefault();
    game($(this).val());
    makeMark($(this).parents(".spot"));
    switchPlayer();
    $("#player").text("Player " + currentPlayer.mark);
  });
});

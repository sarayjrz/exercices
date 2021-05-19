function Message() {
  this.getChooseColumn = function(max) {
    return this.get("CHOOSE_COLUMN") + max + ".";
  }

  this.showBoard = function(board) {
    let result = "";
    for(let i = 0; i < board.cells.length; i++) {
      for(let j = 0; j < board.cells[i].length; j++) {
        result += board.cells[i][j];
      }
      result += "\n";
    }
    console.log(result);
  }

  this.showNotAllowed = function() {
    alert(this.get("MOVEMENT_NOT_ALLOWED"));
  }

  this.showTie = function () {
    alert(this.get("TIE"));
  }

  this.showTurn = function(disk) {
    alert(disk + this.get("TURN_OF"));
  }

  this.showVictory = function(disk) {
    alert(disk + this.get("VICTORY"));
  }

  this.get = function(key) {
    return Message[key];
  }
}

Message.CHOOSE_COLUMN = "Please introduce the column where you are going to put the disk. 1-";
Message.MOVEMENT_NOT_ALLOWED = "Movement not allowed. Please, try again.";
Message.TIE = "Game over! There is a tie.";
Message.TURN_OF = " moves.";
Message.VICTORY = " has won the game!";

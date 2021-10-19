function View() {
  this.strings = new Strings();

  this.showBoard = function(board) {
    let result = "   ";
    for(let i = 0; i < Board.DIMENSION; i++) {
      result += + " " + (i + 1) + " ";
    }
    result += "\n";
    for(let i = 0; i < Board.DIMENSION; i++) {
      result += (i + 1) + " ";
      for(let j = 0; j < Board.DIMENSION; j++) {
        result += View.BOARD_VERTICAL_SEPARATOR
          + this.getColor(board.getTokenColor(new Coordinate(i,j)));
      }
      result += View.BOARD_VERTICAL_SEPARATOR + "\n";
    }
    console.log(result);
  }

  this.showMoveError = function() {
    alert(this.strings.get("MOVE_ERROR"));
  }

  this.getColor = function(color) {
    if(color == Player.COLORS[0]) {
      return View.WHITE_TOKEN;
    } else if(color == Player.COLORS[1]) {
      return View.BLACK_TOKEN;
    }
    return View.BOARD_EMPTY;
  }

  this.showDraft = function() {

  }

  this.showSurrender = function(color) {

  }

  this.showTurn = function(color) {
    alert(this.strings.get("TURN_OF_PLAYER") + this.strings.get(color.toUpperCase()) + ".");
  }

  this.showVictory = function(color) {

  }
}

View.BOARD_VERTICAL_SEPARATOR = "|";
View.BOARD_EMPTY = "_";
View.WHITE_TOKEN = "○";
View.BLACK_TOKEN = "●";

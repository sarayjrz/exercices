function Strings() {
  this.get = function(key) {
    return Strings[key];
  }

  this.getChooseRow = function() {
    return Strings.CHOOSE_ROW + "(1-" + Board.DIMENSION + "):";
  }

  this.getChooseColumn = function() {
    return Strings.CHOOSE_COLUMN + "(1-" + Board.DIMENSION + "):";
  }
}

Strings.BLACK = "black";
Strings.CHOOSE_ROW = "Please choose a row ";
Strings.CHOOSE_COLUMN = "Please choose a column ";
Strings.MOVE_ERROR = "The movement isn't valid. Please, try again."
Strings.TURN_OF_PLAYER = "It's turn of player ";
Strings.WHITE = "white";

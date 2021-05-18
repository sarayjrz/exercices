function Board() {
  this.squares = createBoard();

  function createBoard() {
    let result = [];
    for(let i = 0; i < TicTacToe.TOKENS_IN_ROW; i++) {
      result[i] = [];
      for(let j = 0; j < TicTacToe.TOKENS_IN_ROW; j++) {
        result[i][j] = Board.EMPTY;
      }
    }
    return result;
  }

  this.isTicTacToe = function(color) {
    let coordinates = [];
    for(let i = 0; i < TicTacToe.TOKENS_IN_ROW; i++) {
      for(let j = 0; j < TicTacToe.TOKENS_IN_ROW; j++) {
        let coordinate = new Coordinate(i,j);
        if(this.getToken(coordinate) == color) {
          coordinates.push(coordinate);
        }
      }
    }
    if(coordinates.length < TicTacToe.TOKENS_IN_ROW) {
      return false;
    }
    return this.inSameDirectionNotNull(coordinates);
  }

  this.inSameDirectionNotNull = function(coordinates) {
    let directions = [];
    for(let i = 0; i < coordinates.length - 1; i++) {
      directions.push(coordinates[i].getDirection(coordinates[i + 1]));
    }
    for(let i = 0; i < directions.length - 1; i++) {
      if(directions[i] != directions[i + 1]) {
        return false;
      }
    }
    return directions[0] != null;
  }

  this.isRemoveValid = function(coordinate, color) {
    return this.getToken(coordinate) == color;
  }

  this.isPutValid = function(coordinate) {
    return this.isSquareEmpty(coordinate);
  }

  this.isSquareEmpty = function(coordinate) {
    return this.getToken(coordinate) == Board.EMPTY;
  }

  this.putToken = function(coordinate, color) {
    this.squares[coordinate.row][coordinate.column] = color;
  }

  this.removeToken = function(coordinate) {
    this.squares[coordinate.row][coordinate.column] = Board.EMPTY;
  }

  this.getToken = function(coordinate) {
    return this.squares[coordinate.row][coordinate.column];
  }
}

Board.EMPTY = "·";
Board.BORDER = "|";

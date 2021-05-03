function Board() {
  this.TOKENS_IN_ROW = 3;

  this.squares = [];
  for(let i = 0; i < this.TOKENS_IN_ROW; i++) {
    for(let j = 0; j < this.TOKENS_IN_ROW; j++) {
      this.squares.push(new Square(new Coordinate(i,j)));
    }
  }

  this.isTicTacToe = function(color) {
    let squares = [];
    for(let i = 0; i < this.squares.length; i++) {
      if(this.squares[i].color == color) {
        squares.push(this.squares[i]);
      }
    }
    if (squares.length < this.TOKENS_IN_ROW) {
      return false;
    }
    return this.inSameDirectionNotNull(squares);
  }

  this.inSameDirectionNotNull = function(squares) {
    let directions = [];
    for(let i = 0; i < squares.length - 1; i++) {
      directions.push(squares[i].position.getDirection(squares[i + 1].position));
    }
    for(let i = 0; i < directions.length - 1; i++) {
      if(directions[i] != directions[i + 1]) {
        return false;
      }
    }
    return directions[0] != null;
  }

  this.isRemoveMovementValid = function(coordinate, color) {
    return this.getToken(coordinate).color == color;
  }

  this.isPutMovementValid = function(coordinate) {
    return this.getToken(coordinate).isEmpty();
  }

  this.getToken = function(coordinate) {
    for(let i = 0; i < this.squares.length; i++) {
      if(coordinate.equals(this.squares[i].position)) {
        return this.squares[i];
      }
    }
  }

  this.print = function() {
    let board = "";
    for(let i = 0; i < this.TOKENS_IN_ROW; i++) {
      for(let j = 0; j < this.TOKENS_IN_ROW; j++) {
        board += this.getToken(new Coordinate(i,j)).color;
      }
      board += "\n";
    }
    console.log(board);
  }
}

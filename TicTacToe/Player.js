function Player(color, board) {
  this.message = new Console();
  this.color = color;
  this.board = board;
  this.tokens = this.board.TOKENS_IN_ROW;

  this.play = function() {
    console.log(this.message.get("TURN_OF") + this.color + ".");
    if(!this.haveTokensLeft()) {
      let origin = this.askOriginCoordinate();
      this.removeToken(origin);
    }
    let target = this.askTargetCoordinate();
    this.putToken(target);
  }

  this.askOriginCoordinate = function() {
    let coordinate;
    let error;
    do {
      coordinate = this.askCoordinate(["GET_ROW_ORIGIN", "GET_COL_ORIGIN"]);
      error = !this.board.isRemoveMovementValid(coordinate, this.color);
      if(error) {
        console.log(this.message.get("REMOVE_INVALID"));
      }
    } while(error)
    return coordinate;
  }

  this.askTargetCoordinate = function() {
    let coordinate;
    let error;
    do {
      coordinate = this.askCoordinate(["GET_ROW_TARGET", "GET_COL_TARGET"]);
      error = !this.board.isPutMovementValid(coordinate);
      if(error) {
        console.log(this.message.get("PUT_INVALID"));
      }
    } while(error)
    return coordinate;
  }

  this.askCoordinate = function(strings) {
    let coordinate;
    let error;
    do {
      let row = prompt(this.message.get(strings[0]));
      let column= prompt(this.message.get(strings[1]));
      coordinate = new Coordinate(row - 1, column - 1);
      error = !coordinate.isValid();
      if(error) {
        console.log(this.message.get("COORDINATE_INVALID"))
      }
    } while(error)
    return coordinate;
  }

  this.putToken = function(coordinate) {
    if(this.tokens > 0) {
      this.tokens--;
    }
    for(let i = 0; i < this.board.squares.length; i++) {
      if(coordinate.equals(this.board.squares[i].position)) {
        this.board.squares[i].setColor(this.color);
      }
    }
    this.board.print();
  }

  this.removeToken = function(coordinate) {
    for(let i = 0; i < this.board.squares.length; i++) {
      if(coordinate.equals(this.board.squares[i].position)) {
        this.board.squares[i].setEmpty();
      }
    }
  }

  this.haveTokensLeft = function() {
    return this.tokens > 0;
  }

  this.declareVictory = function() {
    console.log(this.message.get("VICTORY") + this.color + ".");
  }
}

function Board() {
  this.tokens = initTokens();

  function initTokens() {
    let result = [];
    for(let i = 0; i < Board.DIMENSION; i++) {
      if(i < 3) {
        isEven(i) ?
          result.push(...addRow(i, Player.COLORS[0], isEven)) :
          result.push(...addRow(i, Player.COLORS[0], isOdd));
      } else if(i > 4) {
        isEven(i) ?
          result.push(...addRow(i, Player.COLORS[1], isEven)) :
          result.push(...addRow(i, Player.COLORS[1], isOdd));
      }
    }
    return result;
  }

  function isEven(number) {
    return number % 2 == 0;
  }

  function isOdd(number) {
    return !isEven(number);
  }

  function addRow(row, color, condition) {
    let result = [];
    for(let i = 0; i < Board.DIMENSION; i++) {
      if(condition(i)) {
        result.push(new Token(color, new Coordinate(row, i)));
      }
    }
    return result;
  }

  this.getToken = function(coordinate) {
    for(let i = 0; i < this.tokens.length; i++) {
      if(coordinate.equals(this.tokens[i].position)) {
        return this.tokens[i];
      }
    }
    return null;
  }

  this.getTokenColor = function(coordinate) {
    if(this.getToken(coordinate) != null) {
      return this.getToken(coordinate).color;
    }
  }

  this.isMoveValid = function(coordinate, color) {
    return this.getTokenColor(coordinate) == color;
  }

  this.canTokenMove = function(coordinate) {
    // TODO calcular si puede moverse a una casilla en diagonal o si puede comer
    return false;
  }

  this.isDraft = function() {}

  this.isVictory = function() {

  }
}

Board.DIMENSION = 8;

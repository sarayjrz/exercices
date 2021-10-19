function Token(color, position) {
  this.color = color;
  this.position = position;
  this.type = Token.TYPES[0];

  this.setPosition = function(coordinate) {
    this.position = position;
  }
}

Token.TYPES = ['men', 'king'];


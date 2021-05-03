function Square(position) {
  this.EMPTY_VALUE = "·";
  this.position = position;
  this.color = this.EMPTY_VALUE;

  this.setColor = function(color) {
    this.color = color;
  }

  this.setEmpty = function() {
    this.color = this.EMPTY_VALUE;
  }

  this.isEmpty = function() {
    return this.color == this.EMPTY_VALUE;
  }
}

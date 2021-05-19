function Coordinate(row, col) {
  this.row = row;
  this.col = col;

  this.getConsecutiveCoordinates = function(direction) {
    let coordinates = [];
    let consecutive = this;
    let lastCoordinate = this;
    while(coordinates.length < Connect4.CONSECUTIVE_DISKS - 1) {
      consecutive = lastCoordinate.cloneWithOffset(direction);
      if(consecutive.isInsideLimits()) {
        coordinates.push(consecutive);
        lastCoordinate = consecutive;
      } else {
        return coordinates;
      }
    }
    return coordinates;
  }

  this.isInsideLimits = function() {
    return this.row >= Board.LIMITS[0].row && this.row < Board.LIMITS[1].row &&
      this.col >= Board.LIMITS[0].col && this.col < Board.LIMITS[1].col;
  }

  this.cloneWithOffset = function(coordinate) {
    return new Coordinate(this.row + coordinate.row, this.col + coordinate.col);
  }
}

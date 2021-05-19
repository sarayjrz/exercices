function Board() {
  this.cells = createBoard();
  this.columnHeights = createColumnHeights();

  function createBoard() {
    let result = [];
    for(let i = Board.LIMITS[0].row; i < Board.LIMITS[1].row; i++) {
      result[i] = [];
      for(let j = Board.LIMITS[0].col; j < Board.LIMITS[1].col; j++) {
        result[i][j] = Board.EMPTY;
      }
    }
    return result;
  }

  function createColumnHeights() {
    let result = [];
    for(let i = 0; i < Board.COLS; i++) {
      result.push(Board.ROWS - 1);
    }
    return result;
  }

  this.isConnect4 = function(disk) {
    for(let i = 0; i < Board.ROWS; i++) {
      for (let j = 0; j < Board.COLS; j++) {
        let coordinate = new Coordinate(i, j);
        if(this.getDisk(coordinate) == disk) {
          return this.checkInAllDirections(coordinate);
        }
      }
    }
    return false;
  }

  this.checkInAllDirections = function(coordinate) {
    for(let i = 0; i < Board.DIRECTIONS.length; i++) {
      let consecutive = coordinate.getConsecutiveCoordinates(Board.DIRECTIONS[i]);
      if(consecutive.length == Connect4.CONSECUTIVE_DISKS - 1) {
        return this.areDisksEqual(coordinate, consecutive);
      }
    }
    return false;
  }

  this.areDisksEqual = function(coordinate, consecutive) {
    let counter = 0;
    for(let i = 0; i < consecutive.length; i++) {
      if(this.getDisk(coordinate) == this.getDisk(consecutive[i])) {
        counter++;
      }
    }
    return counter == consecutive.length;
  }

  this.isFull = function() {
    for(let column of this.columnHeights) {
      if(column != 0) {
        return false;
      }
    }
    return true;
  }

  this.getColumnHeight = function(column) {
    return this.columnHeights[column];
  }

  this.getDisk = function(coordinate) {
    return this.cells[coordinate.row][coordinate.col];
  }

  this.setDisk = function(coordinate, disk) {
    this.cells[coordinate.row][coordinate.col] = disk;
    this.columnHeights[coordinate.col]--;
  }
}

Board.EMPTY = "o";
Board.ROWS = 6;
Board.COLS = 7;
Board.LIMITS = [
  new Coordinate(0, 0),
  new Coordinate(Board.ROWS, Board.COLS)
];
Board.DIRECTIONS = [
  new Coordinate(1,0),
  new Coordinate(0,1),
  new Coordinate(1,1),
  new Coordinate(1,-1)
];

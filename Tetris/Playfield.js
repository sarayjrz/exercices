function Playfield() {
  this.cells = create();
  this.message = new Message();

  function create() {
    let result = [];
    for(let i = 0; i < Playfield.HEIGHT; i++) {
      result.push(addEmptyRow());
    }
    result.push(addFullRow());
    return result;
  }

  function addEmptyRow() {
    let result = [];
    for(let i = 0; i < Playfield.WIDTH; i++) {
      result.push(Playfield.EMPTY);
    }
    return result;
  }

  function addFullRow() {
    let result = [];
    for(let i = 0; i < Playfield.WIDTH; i++) {
      result.push(Playfield.FILLED);
    }
    return result;
  }

  this.drop = function(tetromino, column) {
    let row = this.getAvailableRow(tetromino, column);
    this.fillCells(tetromino, new Coordinate(row, column));
    this.message.showDropSuccess(this);
    this.clearCompleteRows();
  }

  this.getAvailableRow = function(tetromino, column) {
    let width = tetromino.getWidth();
    console.log(column);
    for(let i = 0; i < this.cells.length; i++) {
      for(let j = column; j < column + width; j++) {
        console.log(i);
        if(!this.isEmptyCell(new Coordinate(i,j))) {
          return i--;
        }
      }
    }
  }

  this.fillCells = function(tetromino, coordinate) {
    let topLeft = new Coordinate(coordinate.row - tetromino.getHeight(), coordinate.column);
    for(let i = 0; i < tetromino.getHeight(); i++) {
      for(let j = 0; j < tetromino.getWidth(); j++) {
        if(tetromino.isFilledCell(new Coordinate(i,j))) {
          this.cells[topLeft.row + i][topLeft.column + j] = tetromino.getTetromino()[i][j];
        }
      }
    }
  }

  this.isOutOfBoundaries = function(tetromino, column) {
    return column + tetromino.getWidth() - 1 > Playfield.WIDTH;
  }

  this.isEmptyCell = function(coordinate) {
    return this.cells[coordinate.row][coordinate.column] == Playfield.EMPTY;
  }

  this.isGameOver = function(tetromino, column) {
    return this.getAvailableRow(tetromino, column) - tetromino.getHeight() < 0;
  }

  this.isAnyCompleteRow = function() {
    for(let i = 0; i < Playfield.HEIGHT; i++) {
      if(this.isCompleteRow(i)) {
        return true;
      }
    }
    return false;
  }

  this.isCompleteRow = function(row) {
    for(let i = 0; i < Playfield.WIDTH; i++) {
      if(this.isEmptyCell(new Coordinate(row, i))) {
        return false;
      }
    }
    return true;
  }

  this.clearCompleteRows = function() {
    while(this.isAnyCompleteRow()) {
      for(let i = Playfield.HEIGHT - 1; i > 0; i--) {
        if(this.isCompleteRow(i)) {
          copyUpperRows(this, i);
          this.cells[0] = addEmptyRow();
        }
      }
    }
    this.message.showClearSuccess(this);
  }

  function copyUpperRows(playfield, start) {
    for(let i = start; i > 1; i--) {
      playfield.cells[i] = playfield.cells[i - 1];
    }
  }
}

Playfield.WIDTH = 10;
Playfield.HEIGHT = 20;
Playfield.EMPTY = 0;
Playfield.FILLED = 1;

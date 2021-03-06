function CoordinateDialog() {
  this.message = new Message();

  this.read = function(type) {
    let coordinate;
    let error;
    do {
      let row = prompt(this.message.get(
        type == "ORIGIN" ? "READ_ROW_ORIGIN" : "READ_ROW_TARGET"
      ));
      let column = prompt(this.message.get(
        type == "ORIGIN" ? "READ_COL_ORIGIN" : "READ_COL_TARGET"
      ));
      coordinate = new Coordinate(row - 1, column - 1);
      error = !coordinate.isValid();
      if(error) {
        this.message.showCoordinateError();
      }
    } while(error)
    return coordinate;
  }

  this.readOrigin = function(color, board) {
    let coordinate;
    let error;
    do {
      coordinate = this.read("ORIGIN");
      error = !board.isRemoveValid(coordinate, color);
      if(error) {
        this.message.showRemoveError();
      }
    } while(error)
    return coordinate;
  }

  this.readTarget = function(board) {
    let coordinate;
    let error;
    do {
      coordinate = this.read("TARGET");
      error = !board.isPutValid(coordinate);
      if(error) {
        this.message.showPutError();
      }
    } while(error)
    return coordinate;
  }
}

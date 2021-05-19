function PutDialog(board) {
  this.board = board;
  this.message = new Message();

  this.read = function() {
    let error = true;
    let coordinate;
    do {
      let column = parseInt(prompt(this.message.getChooseColumn(Board.COLS))) - 1;
      coordinate = new Coordinate(this.board.getColumnHeight(column),column);
      error = !coordinate.isInsideLimits();
      if(error) {
        this.message.showNotAllowed();
      }
    } while(error);
    return coordinate;
  }
}

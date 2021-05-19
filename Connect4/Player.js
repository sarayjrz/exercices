function Player(disk) {
  this.disk = disk;
  this.message = new Message();

  this.getDisk = function() {
    return this.disk;
  }

  this.putDisk = function(board) {
    this.message.showTurn(this.disk);
    let coordinate = new PutDialog(board).read();
    board.setDisk(coordinate, this.disk);
    this.message.showBoard(board);
  }
}

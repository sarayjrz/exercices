function RotateCommand(tetromino) {
  this.title = "ROTATE";
  this.tetromino = tetromino;
  this.message = new Message();

  this.getTitle = function() {
    return this.title;
  }

  this.execute = function() {
    this.tetromino.rotate();
    this.message.showRotateSuccess(this.tetromino);
  }

}

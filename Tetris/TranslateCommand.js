function TranslateCommand(tetromino, playfield) {
  this.title = "TRANSLATE";
  this.tetromino = tetromino;
  this.playfield = playfield;
  this.column = Math.floor(Playfield.WIDTH / 2 - this.tetromino.getWidth() / 2);
  this.message = new Message();

  this.getTitle = function() {
    return this.title;
  }

  this.execute = function() {
    let column;
    let error;
    do {
      column = parseInt(prompt(this.message.getChooseColumn())) - 1;
      error = this.playfield.cells[0][column - 1] == undefined ||
        this.playfield.isOutOfBoundaries(this.tetromino, column);
      if(error) {
        this.message.showError();
      }
    } while(error);
    this.column = column;
    this.message.showTranslateSuccess(this.column);
  }

  this.getColumn = function() {
    return this.column;
  }

}

function TranslateCommand(tetromino, playfield, column) {
  this.title = "TRANSLATE";
  this.tetromino = tetromino;
  this.playfield = playfield;
  this.column = column;
  this.message = new Message();

  this.getTitle = function() {
    return this.title;
  }

  this.execute = function() {
    let error;
    do {
      this.column.value = parseInt(prompt(this.message.getChooseColumn())) - 1;
      error = this.playfield.cells[0][this.column.value] == undefined ||
        this.playfield.isOutOfBoundaries(this.tetromino, this.column.value);
      if(error) {
        this.message.showError();
      }
    } while(error);
    this.message.showTranslateSuccess(this.column.value);
  }

}

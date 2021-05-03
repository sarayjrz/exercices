function TetrominoMenu(tetromino, playfield) {
  this.tetromino = tetromino;
  this.playfield = playfield;
  this.translateCommand = new TranslateCommand(this.tetromino, this.playfield);
  this.commands = [
    new RotateCommand(this.tetromino),
    this.translateCommand,
    new DropCommand(this.translateCommand)
  ];
  this.message = new Message();

  this.execute = function() {
    this.message.showCurrent(this.tetromino);
    let option;
    let error;
    do {
      option = parseInt(prompt(this.message.getMenuCommands(this.commands))) - 1;
      error = this.commands[option] == undefined;
      if(error) {
        this.message.show("WRONG_OPTION");
      } else {
        this.commands[option].execute();
      }
    } while(this.commands[this.commands.length - 1].getExecuted() == false)
  }

  this.getColumn = function() {
    return this.translateCommand.getColumn();
  }
}

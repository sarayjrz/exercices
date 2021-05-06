function Tetris() {
  this.playfield = new Playfield();
  this.message = new Message();

  this.play = function() {
    this.message.showPlayfield(this.playfield);
    let tetromino;
    let menu;
    do {
      tetromino = this.generateRandomTetromino();
      menu = new TetrominoMenu(tetromino, this.playfield);
      menu.execute();
    } while(!this.playfield.isGameOver(tetromino, menu.getColumn()));
    this.message.showGameOver();
  }

  this.generateRandomTetromino = function() {
    let randomNumber = Math.floor((Math.random() * Object.keys(TETROMINOES).length - 1) + 1);
    return new Tetromino(Object.keys(TETROMINOES)[randomNumber]);
  }
}


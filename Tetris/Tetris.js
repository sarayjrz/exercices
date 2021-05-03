function Tetris() {
  this.playfield = new Playfield();
  this.message = new Message();

  this.play = function() {
    let isGameOver;
    this.message.showPlayfield(this.playfield);
    do {
      let tetromino = this.generateRandomTetromino();
      let menu = new TetrominoMenu(tetromino, this.playfield);
      menu.execute();
      let column = menu.getColumn();
      isGameOver = this.playfield.isGameOver(tetromino, column);
      if(!isGameOver) {
        this.playfield.drop(tetromino, column);
      }
    } while(!isGameOver)
    this.message.showGameOver();
  }

  this.generateRandomTetromino = function() {
    let randomNumber = Math.floor((Math.random() * Object.keys(TETROMINOES).length - 1) + 1);
    return new Tetromino(Object.keys(TETROMINOES)[randomNumber]);
  }
}


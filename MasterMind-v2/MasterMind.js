function MasterMind() {
  this.board = new Board();
  this.boardView = new BoardView(this.board);
  this.combinationView = new CombinationView();
  this.resultView = new ResultView(this.board);

  this.play = function() {
    do {
      let combination = this.combinationView.read();
      this.board.add(combination);
      // mostrar el tablero aquí, dentro de add en el board?
      this.boardView.showBoard();
    } while(!this.board.isWinner() && !this.board.isLoser());
    this.resultView.showResult();
  }
}

MasterMind.MAX_ATTEMPTS = 10;

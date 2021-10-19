function Checkers() {
  this.players = [];
  for(let color of Player.COLORS) {
    this.players.push(new Player(color));
  }
  this.board = new Board();
  this.turn = new Turn();
  this.view = new View();

  this.play = function() {
    this.view.showBoard(this.board);
    let draft = false;
    let victory = false;
    let surrender = false;
    do {
      this.getCurrentPlayer().playTurn(this.board);
      victory = this.board.isVictory(this.getCurrentPlayer().getColor());
      draft = this.board.isDraft();
      surrender = this.isSurrender();
      if(!victory && !draft && !surrender) {
        this.turn.change();
      }
    } while(!victory && !draft && !surrender);
    if(victory) {
      this.view.showVictory(this.getCurrentPlayer().getColor());
    } else if(draft) {
      this.view.showDraft();
    } else {
      this.view.showSurrender(this.getCurrentPlayer().getColor());
    }
  }

  this.isSurrender = function() {

  }

  this.getCurrentPlayer = function() {
    return this.players[this.turn.value];
  }
}

function Connect4() {
  this.board = new Board();
  this.players = [];
  for(let disk of Connect4.DISKS) {
    this.players.push(new Player(disk));
  }
  this.turn = Math.round(Math.random());
  this.message = new Message();

  this.play = function() {
    let victory = false;
    let tie = false;
    this.message.showBoard(this.board);
    do {
      this.getCurrentPlayer().putDisk(this.board);
      victory = this.board.isConnect4(this.getCurrentPlayer().getDisk());
      tie = this.board.isFull();
      if(!victory || !tie) {
        this.changeTurn();
      }
    } while(!victory && !tie);
    if(victory) {
      this.message.showVictory(this.getCurrentPlayer().getDisk());
    } else {
      this.message.showTie();
    }
  }

  this.getCurrentPlayer = function() {
    return this.players[this.turn];
  }

  this.changeTurn = function() {
    this.turn = (this.turn + 1) % 2;
  }
}

Connect4.DISKS = ["x", "*"];
Connect4.CONSECUTIVE_DISKS = 4;

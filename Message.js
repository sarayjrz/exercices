function Message() {
  this.showPlayfield = function(playfield) {
    let result = "";
    for(let i = 0; i < Playfield.HEIGHT; i++) {
      for(let j = 0; j < Playfield.WIDTH; j++) {
        result += Message.GRAPHICS_BORDER;
        if(playfield.cells[i][j] == 0) {
          result += Message.GRAPHICS_EMPTY;
        } else {
          result += Message.GRAPHICS_FULL;
        }
      }
      result += Message.GRAPHICS_BORDER + "\n";
    }
    console.log(result);
  }

  this.showTetromino = function(tetromino) {
    let result = "";
    for(let i = 0; i < tetromino.getTetromino().length; i++) {
      result += Message.GRAPHICS_BORDER;
      for(let j = 0; j < tetromino.getTetromino()[i].length; j++) {
        if(tetromino.getTetromino()[i][j] == 0) {
          result += Message.GRAPHICS_EMPTY;
        } else {
          result += Message.GRAPHICS_FULL;
        }
        result += Message.GRAPHICS_BORDER;
      }
      result += "\n";
    }
    console.log(result);
  }

  this.showClearSuccess = function(playfield) {
    this.show("CLEAR_SUCCESS");
    this.showPlayfield(playfield);
  }

  this.showCurrent = function(tetromino) {
    this.show("CURRENT_TETROMINO");
    this.showTetromino(tetromino);
  }

  this.showError = function() {
    alert(this.get("WRONG_OPTION"));
  }

  this.showGameOver = function() {
    this.show("GAME_OVER");
  }

  this.showDropSuccess = function(playfield) {
    this.show("DROP_SUCCESS");
    this.showPlayfield(playfield);
  }

  this.showRotateSuccess = function(tetromino) {
    this.show("ROTATE_SUCCESS");
    this.showTetromino(tetromino);
  }

  this.showTranslateSuccess = function(column) {
    console.log(this.get("TRANSLATE_SUCCESS") + " " + (column + 1) + ".");
  }

  this.show = function(key) {
    console.log(Message[key]);
  }

  this.getChooseColumn = function() {
    let message = this.get("CHOOSE_COLUMN");
    message += " (1 - " + Playfield.WIDTH + "):";
    return message;
  }

  this.getMenuCommands = function(commands) {
    let message = this.get("CHOOSE_OPTIONS");
    for(let i = 0; i < commands.length; i++) {
      message += "\n" + (i + 1) + ". " + this.get(commands[i].getTitle());
    }
    return message;
  }

  this.get = function(key) {
    return Message[key];
  }
}

Message.CHOOSE_COLUMN = "Choose one column";
Message.CHOOSE_OPTIONS = "Choose an option:";
Message.CLEAR_SUCCESS = "Lines cleared!";
Message.DROP = "Drop Tetromino";
Message.DROP_SUCCESS = "Tetromino into the playfield.";
Message.CURRENT_TETROMINO = "Current tetromino is:";
Message.GAME_OVER = "You lose! \nGame over.";
Message.GRAPHICS_BORDER = "|";
Message.GRAPHICS_EMPTY = "_";
Message.GRAPHICS_FULL = "■";
Message.ROTATE = "Rotate Tetromino";
Message.ROTATE_SUCCESS = "Tetromino rotated 90 degrees.";
Message.TRANSLATE = "Translate Tetromino";
Message.TRANSLATE_SUCCESS = "Tetromino will be dropped on column"
Message.WRONG_OPTION = "Invalid option. Try again.";


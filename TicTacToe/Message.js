function Message() {
  this.showCurrentTurn = function(color) {
    alert(this.get("TURN_OF") + color + ".");
  }

  this.showBoard = function(board) {
    let result = "";
    for(let i = 0; i < TicTacToe.TOKENS_IN_ROW; i++) {
      result += Message.BORDER;
      for(let j = 0; j < TicTacToe.TOKENS_IN_ROW; j++) {
        result += board.getToken(new Coordinate(i, j));
        result += Message.BORDER;
      }
      result += "\n";
    }
    console.log(result);
  }

  this.showCoordinateError = function() {
    alert(this.get("COORDINATE_INVALID"));
  }

  this.showPutError = function() {
    alert(this.get("PUT_INVALID"));
  }

  this.showRemoveError = function() {
    alert(this.get("REMOVE_INVALID"));
  }

  this.showVictory = function(player) {
    console.log(this.get("VICTORY") + player.color + ".");
  }

  this.get = function(key) {
    return Message[key];
  }
}

Message.TURN_OF = "Es el turno del jugador ";
Message.REMOVE_INVALID = "La coordenada de origen no es válida. Seleccione una casilla perteneciente a su color.";
Message.PUT_INVALID = "La coordenada de destino no es válida. Seleccione una casilla vacía.";
Message.READ_ROW_TARGET = "Escribe la fila de la coordenada donde pondrás tu ficha: (1 - 3)";
Message.READ_COL_TARGET = "Escribe la columna de la coordenada donde pondrás tu ficha (1 - 3):";
Message.READ_ROW_ORIGIN = "Escribe la fila de la coordenada donde quitarás tu ficha (1 - 3):";
Message.READ_COL_ORIGIN = "Escribe la columna de la coordenada donde quitarás tu ficha (1 - 3):";
Message.COORDINATE_INVALID = "La coordenada no es válida o está fuera de los límites del tablero.";
Message.VICTORY = "Fin de la partida! Ha ganado el jugador ";
Message.BORDER = "|";

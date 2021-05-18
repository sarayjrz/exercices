const TOKENS_IN_ROW = 3;
const BOARD_EMPTY = "·";
const BOARD_BORDER = "|";
const STRINGS = {
  TURN_OF: "Es el turno del jugador ",
  REMOVE_INVALID: "La coordenada de origen no es válida. Seleccione una casilla perteneciente a su color.",
  PUT_INVALID: "La coordenada de destino no es válida. Seleccione una casilla vacía.",
  READ_ROW_TARGET: "Escribe la fila de la coordenada donde pondrás tu ficha: (1 - 3)",
  READ_COL_TARGET: "Escribe la columna de la coordenada donde pondrás tu ficha (1 - 3):",
  READ_ROW_ORIGIN: "Escribe la fila de la coordenada donde quitarás tu ficha (1 - 3):",
  READ_COL_ORIGIN: "Escribe la columna de la coordenada donde quitarás tu ficha (1 - 3):",
  COORDINATE_INVALID: "La coordenada no es válida o está fuera de los límites del tablero.",
  VICTORY: "Fin de la partida! Ha ganado el jugador ",
};

(function() {
  let board = createBoard();
  let turn = Math.round(Math.random());
  let players = createPlayers();
  let isTicTacToe = false;
  let currentPlayer = getCurrentPlayer(players, turn);
  showBoard(board);
  do {
    playTurn(currentPlayer, board);
    isTicTacToe = isTicTacToeFunction(board, currentPlayer.color);
    if(!isTicTacToe) {
      turn = changeTurn(turn);
      currentPlayer = getCurrentPlayer(players, turn);
    }
  } while(!isTicTacToe);
  showVictory(currentPlayer);
}());

// Board
function createBoard() {
  let result = [];
  for(let i = 0; i < TOKENS_IN_ROW; i++) {
    result[i] = [];
    for(let j = 0; j < TOKENS_IN_ROW; j++) {
      result[i][j] = BOARD_EMPTY;
    }
  }
  return result;
}

function isTicTacToeFunction(board, color) {
  let coordinates = [];
  for(let i = 0; i < TOKENS_IN_ROW; i++) {
    for(let j = 0; j < TOKENS_IN_ROW; j++) {
      let coordinate = {
        row: i,
        column: j
      };
      if(getToken(board, coordinate) == color) {
        coordinates.push(coordinate);
      }
    }
  }
  if(coordinates.length < TOKENS_IN_ROW) {
    return false;
  }
  return inSameDirectionNotNull(coordinates);
}

function inSameDirectionNotNull(coordinates) {
  let directions = [];
  for(let i = 0; i < coordinates.length - 1; i++) {
    directions.push(getDirection(coordinates[i], coordinates[i + 1]));
  }
  for(let i = 0; i < directions.length - 1; i++) {
    if(directions[i] != directions[i + 1]) {
      return false;
    }
  }
  return directions[0] != null;
}

function putToken(board, coordinate, player) {
  board[coordinate.row][coordinate.column] = player.color;
  if(hasTokensLeft(player)) {
    player.tokensLeft--;
  }
  showBoard(board);
}

function removeToken(board, coordinate) {
  board[coordinate.row][coordinate.column] = BOARD_EMPTY;
  showBoard(board);
}

function isRemoveValid(board, coordinate, color) {
  return getToken(board, coordinate) == color;
}

function isPutValid(board, coordinate) {
  return isSquareEmpty(board, coordinate);
}

function isSquareEmpty(board, coordinate) {
  return getToken(board, coordinate) == BOARD_EMPTY;
}

function getToken(board, coordinate) {
  return board[coordinate.row][coordinate.column];
}

// Players
function createPlayers() {
  return ["o", "x"].map(color => {
    return {
      color: color,
      tokensLeft: TOKENS_IN_ROW
    }
  });
}

function hasTokensLeft(player) {
  return player.tokensLeft > 0;
}

// Turn
function playTurn(player, board) {
  showCurrentTurn(player.color);
  if(!hasTokensLeft(player)) {
    let origin = readOriginCoordinate(board, player.color);
    removeToken(board, origin);
  }
  let target = readTargetCoordinate(board);
  putToken(board, target, player);
}

function getCurrentPlayer(players, turn) {
  return players[turn];
}

function changeTurn(turn) {
  return (turn + 1) % 2;
}

// Coordinate
function readCoordinate(type) {
  let coordinate;
  let error;
  do {
    let row = prompt(getString(type == "ORIGIN" ? "READ_ROW_ORIGIN" : "READ_ROW_TARGET"));
    let column = prompt(getString(type == "ORIGIN" ? "READ_COL_ORIGIN" : "READ_COL_TARGET"));
    coordinate = {
      row: row - 1,
      column: column - 1
    };
    error = !isValidCoordinate(coordinate);
    if(error) {
      showCoordinateError();
    }
  } while(error)
  return coordinate;
}

function readOriginCoordinate(board, color) {
  let coordinate;
  let error;
  do {
    coordinate = readCoordinate("ORIGIN");
    error = !isRemoveValid(board, coordinate, color);
    if(error) {
      showRemoveError();
    }
  } while(error)
  return coordinate;
}

function readTargetCoordinate(board) {
  let coordinate;
  let error;
  do {
    coordinate = readCoordinate("TARGET");
    error = !isPutValid(board, coordinate);
    if(error) {
      showPutError();
    }
  } while(error)
  return coordinate;
}

function getDirection(coordinate1, coordinate2) {
  const DIRECTIONS = {
    DIAGONAL: 'diagonal',
    INVERSE_DIAGONAL: 'inverse diagonal',
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical'
  };

  if(isInDiagonal(coordinate1) && isInDiagonal(coordinate2)) {
    return DIRECTIONS.DIAGONAL;
  } else if(isInInverseDiagonal(coordinate1) && isInInverseDiagonal(coordinate2)) {
    return DIRECTIONS.INVERSE_DIAGONAL;
  } else if(coordinate1.row == coordinate2.row) {
    return DIRECTIONS.HORIZONTAL;
  } else if(coordinate1.column == coordinate2.column) {
    return DIRECTIONS.VERTICAL;
  }
  return null;
}

function isInDiagonal(coordinate) {
  return coordinate.row - coordinate.column == 0;
}

function isInInverseDiagonal(coordinate) {
  return coordinate.row + coordinate.column == TOKENS_IN_ROW;
}

function isValidCoordinate(coordinate) {
  return coordinate.row >= 0 && coordinate.row < TOKENS_IN_ROW &&
    coordinate.column >= 0 && coordinate.column < TOKENS_IN_ROW;
}

// View
function getString(key) {
  return STRINGS[key];
}

function showBoard(board) {
  let result = "";
  for(let i = 0; i < TOKENS_IN_ROW; i++) {
    result += BOARD_BORDER;
    for(let j = 0; j < TOKENS_IN_ROW; j++) {
      result += getToken(board, { row: i, column: j });
      result += BOARD_BORDER;
    }
    result += "\n";
  }
  console.log(result);
}

function showCoordinateError() {
  alert(this.getString("COORDINATE_INVALID"));
}

function showCurrentTurn(color) {
  alert(getString("TURN_OF") + color + ".");
}

function showRemoveError() {
  alert(this.getString("REMOVE_INVALID"));
}

function showPutError() {
  alert(getString("PUT_INVALID"));
}

function showVictory(player) {
  alert(getString("VICTORY") + player.color + ".");
}

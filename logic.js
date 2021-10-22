let players = ["x", "o"];
let playersName = ["Крестики", "Нолики"];
let activePlayer = 0;
let board;
let gamer = playersName[activePlayer];

function startGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  renderBoard(board);
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  checkW(board, activePlayer);
  activePlayer = Number(!activePlayer);
  gamer = playersName[activePlayer];

  renderBoard(board);
}

function checkW(board, val) {
  const more = board.length;
  let diag = 0;
  let diag1 = 0;

  for (let i = 0; i < more; i++) {
    let horiz = 0;
    let vertic = 0;
    for (let j = 0; j < more; j++) {
      if (board[i][j] == players[val]) {
        horiz++;
      }
      if (board[j][i] == players[val]) {
        vertic++;
      }
    }
    if (board[i][more - 1 - i] == players[val]) {
      diag++;
    }
    if (board[i][i] == players[val]) {
      diag1++;
    }

    if (horiz == more || vertic == more || diag == more || diag1 == more) {
      showWinner(gamer);
    }
  }
}

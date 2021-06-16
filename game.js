class Game {
  constructor() {
    this.playerJedi = new Player("jedi","assets/logo_rebel.svg");
    this.playerSith = new Player("sith","assets/empire_logo.svg");
    this.currentPlayer = null;
    this.winner = null;
    this.board = new Array(9);
    this.winningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                         [0, 3, 6], [1, 4, 7], [2, 5, 8],
                         [2, 4, 6], [0, 4, 8]];
  }

  changePlayer() {
    if (this.currentPlayer === this.playerJedi) {
      this.currentPlayer = this.playerSith;
    } else {
      this.currentPlayer = this.playerJedi;
    };
  }

  runPlayerClick(clickedBtnIndex) {
    this.board[clickedBtnIndex] = this.currentPlayer.id;
    this.currentPlayer.moves.push(clickedBtnIndex);

    if (this.isWinnerMove()) {
      this.winner = this.currentPlayer;
      return true;
    }else if (!this.board.includes(undefined)) {
      this.winner = false;
      return ;
    }
  }

  isWinnerMove() {
    if (this.currentPlayer.moves.length < 3) {
      return false;
    }

    for (var i = 0; i < this.winningMoves.length; i++) {
        var winningCombo = 0;
        var moves = this.winningMoves[i];

        for (var m = 0; m < moves.length; m++) {
          if (this.currentPlayer.moves.includes(moves[m])) {
            winningCombo++;
            if (winningCombo === 3) {
              return true;
            }
          }
        }
    }

    return false;
  }

  startNewGame() {
      this.board = new Array(9);
      this.winner = null;
      this.playerJedi.moves = [];
      this.playerSith.moves = [];
      this.changePlayer();
  }
}

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
    if(this.currentPlayer === this.playerJedi) {
      this.currentPlayer = this.playerSith;
    } else {
      this.currentPlayer = this.playerJedi;
    };
  }

  runPlayerClick(clickedBtnIndex) {
    this.board[clickedBtnIndex] = this.currentPlayer.id;
    this.currentPlayer.moves.push(clickedBtnIndex);

    if(this.isWinnerMove()) {
      console.log("aqui");
      this.winner = this.currentPlayer;
      return true;
    } else if (!this.board.includes(undefined)) {
      this.winner = false;
      return ;
    }

  }
  //
  // addCurrentPlayerMoves() {
  //   // var currentPlayerMoves = [];
  //
  //   for(var i = 0; i < this.board.length; i++) {
  //     var playerMove = this.board[i];
  //     // console.log(playerMove);
  //
  //     if(playerMove === this.currentPlayer.id) {
  //       this.currentPlayer.moves.push(i)
  //     }
  //
  //     // var isWinningMove = game.isWinnerMove();
  //     // if(isWinningMove === true ) {
  //     //   winningMessage.innerText = `${this.currentPlayer.id} won  !!`
  //     //   if(this.currentPlayer.id === "jedi") {
  //     //     this.currentPlayer.addWin(this.board);
  //     //     jediNumberWins.innerText = `“do. or do not. there is no try.” jedi wins: ${this.currentPlayer.numberWins}`;
  //     //     // console.log("aqui");
  //     //   } else {
  //     //     this.currentPlayer.addWin(this.board);
  //     //     sithNumberWins.innerText = `"this will be a day long remembered" dark side wins: ${this.currentPlayer.numberWins}`;
  //     //   }
  //       game.startNewGame();
  //     }
  //   }
  //   // return currentPlayerMoves;
  // }

  isWinnerMove() {
    if (this.currentPlayer.moves.length < 3) {
      return false;
    }

    for(var i = 0; i < this.winningMoves.length; i++) {
        var winningCombo = 0;
        var moves = this.winningMoves[i];

        for(var m = 0; m < moves.length; m++) {
          if(this.currentPlayer.moves.includes(moves[m])) {
            winningCombo++;
            if(winningCombo === 3) {
              return true;
            }
          }

        }

    }
      // // console.log(this.board);
      // var emptySpaces = 0;
      // for(var b = 0; b < this.board.length; b++) {
      //   // console.log(this.board[b]);
      //   if(this.board[b]=== undefined) {
      //     emptySpaces++;
      //   }
      // }
      // // console.log(emptySpaces);
      // if(emptySpaces < 1) {
      //   return  winningMessage.innerText = `it's a draw  !!`;
      // }

    return false;
  }

    startNewGame() {
      // console.log("lalalal")
      // if (this.winner) {
      //   // this.currentPlayer.addWin(this.board);
      //   // this.currentPlayer.saveWinsToStorage();
      // }

      this.board = new Array(9);
      this.winner = null;
      this.playerJedi.moves = [];
      this.playerSith.moves = [];
      this.changePlayer();


  // this.setFirstPlayer();

    }

  }

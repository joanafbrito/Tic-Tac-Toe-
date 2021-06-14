class Game {
  constructor() {
    this.playerJedi = new Player("jedi","assets/logo_rebel.svg");
    this.playerSith = new Player("sith","0");
    this.currentPlayer = this.playerJedi;
    this.board = new Array(9);
    this.winningMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                         [0, 3, 6], [1, 4, 7], [2, 5, 8],
                         [2, 4, 6], [0, 4, 8]];

  }
  runPlayerClick(clickedBtnIndex) {

    // e nesse index vai ser passado o valor do current player name?
    this.board[clickedBtnIndex] = this.currentPlayer.name;


    if(this.currentPlayer === this.playerJedi) {
      this.currentPlayer = this.playerSith;
    } else {
      this.currentPlayer = this.playerJedi;
    };
  }
  addCurrentPlayerMoves() {
    var currentPlayerMoves = [];

    for(var i = 0; i < this.board.length; i++) {
      var playerMove = this.board[i];

      if(playerMove === this.currentPlayer.name) {
        currentPlayerMoves.push(i);
      }
    }
    return currentPlayerMoves;
    // is returning one array with the moves of
    // the current player
  }

  isWinnerMove() {

    if(this.addCurrentPlayerMoves().length < 3) {
      return false;
    }

    for(var i = 0; i < this.winningMoves.legnth; i++) {
        var winninComb = 0;
        // each this.winningMoves[i] = 3 moves;
        var moves = this.winningMoves[i];

        for(var m = 0; m < moves.length; m++) {
          if(this.addCurrentPlayerMoves().includes(moves[m])) {
            winninComb++;

            if(winninComb === 3) {
              // we have a winner!
              return true;
            }
          }

        }
      }

      return false;

    }

    startNewGame() {
      if (this.winner) {
        this.currentPlayer.addWin(this.board);
        this.currentPlayer.saveWinsToStorage();
      }
      this.board = new Array(9);

      // this.currentPlayer= how do i tell the computer who is the current player



    }

  }

// A way to keep track of the data for the game board ( this.board)
// A way to keep track of which player’s turn it currently is (this.currentPlayer)
// ****as soon as the click happen change the player.***
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// // // A way to reset the Game’s board to begin a new game
// This workflow is not required, but will help you meet the overall requirements of the project.
//
//
// function createNewIdea() {
//   if (checkInputs() === false) {
//     return false;
//   }
// function displayIdeas() {
//   titleInput.value = null;
//   bodyInput.value = null;
//   starredIdeasBtn.innerText = "Show Starred Ideas";
//
//   ideaContainerSection.innerHTML = "";
//
//   for (i = 0; i < savedIdeas.length; i++) {
//     if (savedIdeas[i].star === true) {
//       ideaContainerSection.innerHTML +=`<article id=${savedIdeas[i].id} class="starred">
//         <header>
//             <button id="favorite" class="favorite-button">
//               <img name="star-white" id="starWhite" src="assets/star.svg" alt="star">
//               <img name="star-red" id="starRed" src="assets/star-active.svg" alt="star">
//             </button>
//             <button id="deleteCard" class="delete-button">
//               <img name="x-white" src="assets/delete.svg" alt="X">
//               <img name="x-red" id="x-red" src="assets/delete-active.svg" alt="X">
//             </button>
//         </header>
//         <div class="idea-body">
//           <strong>${savedIdeas[i].title}</strong>
//           <p>${savedIdeas[i].body}</p>
//         </div>
//         <footer>
//           <button class="comment-button">
//             <img src="assets/comment.svg" alt="comment">
//             <span>Comment</span>
//           </button>
//         </footer>
//       </article>`
//     } else if (savedIdeas[i].star === false) {
//       ideaContainerSection.innerHTML += `<article id=${savedIdeas[i].id}>
//         <header>
//             <button id="favorite" class="favorite-button">
//               <img name="star-white" id="starWhite" src="assets/star.svg" alt="star">
//               <img name="star-red" id="starRed" src="assets/star-active.svg" alt="star">
//             </button>
//             <button id="deleteCard" class="delete-button">
//               <img name="x-white" src="assets/delete.svg" alt="X">
//               <img name="x-red" id="x-red" src="assets/delete-active.svg" alt="X">
//             </button>
//         </header>
//         <div class="idea-body">
//           <strong>${savedIdeas[i].title}</strong>
//           <p>${savedIdeas[i].body}</p>
//         </div>
//         <footer>
//           <button class="comment-button">
//             <img src="assets/comment.svg" alt="comment">
//             <span>Comment</span>
//           </button>
//         </footer>
//       </article>`
//     }
//   }
// }
//     var newIdea = new Idea(titleInput.value, bodyInput.value)
//     savedIdeas.push(newIdea);
//     newIdea.saveToStorage();
//     displayIdeas();
//   }
// Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)
// Create the Player class
// Create the Game class
// Make game fully playable without the DOM (manually updating the Game.board data, etc, from your console) to force yourself to think data-model-first
// Create central game board on the DOM
// Connect Game data model to the DOM
// Display the Player data in the sidebars
// Automatically reset the game board to allow for a new game to be played after the previous game is won
// Persist Player data using local storage (number of wins should persist across page refreshes)

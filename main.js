// file that contains all DOM related JavaScript
// This workflow is not required, but will help you meet the overall requirements of the project.
//
// Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)
// Make game fully playable without the DOM (manually updating the Game.board data, etc, from your console) to force yourself to think data-model-first
// Create central game board on the DOM
// Connect Game data model to the DOM
// Display the Player data in the sidebars
// Automatically reset the game board to allow for a new game to be played after the previous game is won
// Persist Player data using local storage (number of wins should persist across page refreshes)
var buttons = document.querySelectorAll(".buttons button");

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click",function(event) {
    event.preventDefault();

    // console.log(event.target.getAttribute("id"));
    var index = parseInt(event.target.getAttribute("id").replace("button",""));
    // console.log (index);
    // gameOne.board[index]=
gameOne.getCurrentPlayer(1);
  });
}
var gameOne = new Game();
gameOne.getCurrentPlayer(1);

// var winner- pseudocode.
// if(playerOne.token === [0,4,8] || playerOne.token === [2,4,6] ||
//    playerOne.token === [1,4,7] || playerOne.token === [3,4,5] ||
//    playerOne.token === [6,7,8] || playerOne.token === [0,1,2] ||
//    playerOne.token === [0,3,6] || playerOne.token ===[2,5,8]) {
//
//      return `${playerOne} is the Winner!`
//    } else {
//      gameOne.getCurrentPlayer();
//    }

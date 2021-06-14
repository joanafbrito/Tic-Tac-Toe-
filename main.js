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
var buttons = document.querySelectorAll(".buttons");
// var btns = Array.from(buttons);- option but only for modern browsers.
// --change the node list into one array.
var btns = Array.prototype.slice.call(buttons);
// var token =

var game = new Game();


for (var i = 0; i < btns.length; i++) {
  // select each button.- so for each button
  var button = btns[i];

  button.addEventListener("click",function(event) {
    event.preventDefault();

// se no momento no click ou evento eu target o conteudo do html e ele for vazio, ele deve adicionar o token do
// current player , se for diferente de vazio( ou se tiver algum conteudo, pare e nao altere nada.- talvez possa retornar nada)
    if(event.target.innerHTML !== "") {
      return false;
    } else {
      event.target.innerText = game.currentPlayer.token;
      // pra identificar o local que foi clicado eu pego o index do botao clicado.
      var clikedBtnIndex = btns.indexOf(event.target);

// and add the current player to the game using the method created on the class.
      game.runPlayerClick(clikedBtnIndex);
    }

    // console.log(event.target.getAttribute("id"));
    var btnIndex = parseInt(event.target.getAttribute("id").replace("btn",""));
    if(btnIndex === btns[i]) {

    }
    // The target event property returns the element that triggered the event.
    // The target property gets the element on which the event originally occurred,
    // opposed to the currentTarget property, which always refers to the element whose
    // event listener triggered the event
    // Events are objects with certain properties, and e. target almost always represents a DOM element.
    // Thus e. target. value is the value property of some DOM element, in this case that means the text entered
    // in the search input.
    // I'm tageting the id
    // console.log (index);
    // gameOne.board[index]=
// gameOne.runPlayerClick(1);
  });
}

// gameOne.runPlayerClick(1);

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

var buttons = document.querySelectorAll(".buttons button");
var playerTurn = document.getElementById("playerTurn");
var jediNumberWins = document.getElementById("jediWins");
var sithNumberWins = document.getElementById("sithWins");
var btns = Array.prototype.slice.call(buttons);


var game = new Game();

game.startNewGame();
jediNumberWins.innerHTML = `"do. or do not. there is no try."" <br> jedi wins:<br> ${game.playerJedi.wins.length}`;
sithNumberWins.innerHTML = `"this will be a day long remembered" <br> dark side wins:<br> ${game.playerSith.wins.length}`;


for (var i = 0; i < btns.length; i++) {
  var button = btns[i];

  button.addEventListener("click",function (event) {
    event.preventDefault();

    soundtrack.muted = false;
    soundtrack.play();

    if (game.winner !== null) {
      game.startNewGame();
      playerTurn.innerHTML = `May the Force be with you, it's <strong class="${game.currentPlayer.id}">${game.currentPlayer.id}</strong>'s turn!`;

      for (var b = 0; b < btns.length; b++) {
        btns[b].innerHTML = "";
      }
      return;
    }
    if (event.target.innerHTML !== "") {
      return false;
    } else {
      event.target.innerHTML = `<img src="${game.currentPlayer.token}" alt="${game.currentPlayer.id}"/>`;
      var clikedBtnIndex = btns.indexOf(event.target);
      game.runPlayerClick(clikedBtnIndex);

      if (game.winner === false) {
        playerTurn.innerText = `it's a draw  !!`
      } else if (game.winner === null) {
        game.changePlayer()
        playerTurn.innerHTML = `May the Force be with you, it's <strong class="${game.currentPlayer.id}">${game.currentPlayer.id}</strong>'s turn!`;
      }else {
          playerTurn.innerText = `${game.currentPlayer.id} won  !!`
          game.currentPlayer.addWin(game.board);
          if (game.currentPlayer.id === "jedi") {
            jediNumberWins.innerHTML = `"do. or do not. there is no try."" <br> jedi wins:<br> ${game.currentPlayer.wins.length}`;
            sound = document.getElementById("saber");
            sound.play();
          }else {
            sithNumberWins.innerHTML = `"this will be a day long remembered" <br> dark side wins:<br> ${game.currentPlayer.wins.length}`;
          }
      }
    }
  })
};

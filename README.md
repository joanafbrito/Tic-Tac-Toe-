# Tic-Tac-Toe-
##Final solo project Mod1


##Technologies Used##

**HTML**
**CSS**
**JavaScript**

##Instructions for running and viewing
###Architecture

This entire application consists of :

 * one HTML page.
 * one CSS file.
 * one assets directory.
 * three JavaScript files:

1. A player.js file that contains a Player class.

  Player methods that includes, but are not limited to:
  *constructor - properties that include: id, token, wins, moves;*
  *addWin*
  *saveWinsToStorage*
  *retrieveWinsFromStorage*

1. A game.js file that contains a Game class.
  A Game methods that includes, but are not limited to:
  *constructor - Two Player instances, currentPlayer, winner, board, winning Moves*
  *changePlayer*
  *runPlayerClick*
  *isWinnerMove*
  *startNewGame*

1. A main.js file that contains all DOM related JavaScript


##As a user:

You should be able to play tic-toc-toe, when you click into the empty spaces of the board it will show the token of the first player.

When you click again, the board will show the token for the second player, until the game has been won or the board empty spaces end, or a draw!In the next click the game starts again!


##Future Additions:

  * add cards with the winner game board to each of the players.
  * add a player input, to add a name of the player.
  * add extra catch phrases to make the game more fun!

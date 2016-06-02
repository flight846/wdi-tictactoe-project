# Tic-Tac-Tester.js
This script will test the game logic of your tic tac toe game. To use it you will need to include it in your html file after you main tic-tac-toe script. You will need to declare the following functions in the global scope: 

### playTurn(index)
It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played. 
It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.

### isGameOver()
It should return a true or false if the game is over.

### whoWon()
It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.

### restart()
It should restart the game so it can be played again.

It is assumed that the turns of the player will be automatically changed after an allowed move.

The application will console log all the passed or failed test.
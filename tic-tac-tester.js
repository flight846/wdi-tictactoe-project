/*global isGameOver, whoWon, playTurn, restart */
/* Tic-Tac-Tester.js

This script will test the game logic of your tic tac toe game. To use it you will need to include it in your html file after you main tic-tac-toe script. You will need to declare the following functions in the global scope:

# playTurn(index)
It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played.
It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.

# isGameOver()
It should return a true or false if the game is over.

# whoWon()
It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.

# restart()
It should restart the game so it can be played again.

It is assumed that the turns of the player will be automatically changed after an allowed move.

The application will console log all the passed or failed test */

// CONFIG
var showPasses = true
var playerOne = 1
var playerTwo = 2
var playerDraw = 3

var testsRun = 0
var testsPassed = 0
var testsFailed = 0

// TESTS TO RUN
console.log('==================================')
console.log('RUNNING TIC TAC TESTER')
console.log('==================================')
simulateGame('P1 Top Row Victory', [0, 3, 1, 4, 2], playerOne)
simulateGame('P2 Top Row Victory', [8, 0, 3, 1, 4, 2], playerTwo)
simulateGame('P1 Middle Row Victory', [3, 0, 4, 1, 5], playerOne)
simulateGame('P2 Middle Row Victory', [8, 3, 0, 4, 1, 5], playerTwo)
simulateGame('P1 Bottom Row Victory', [6, 0, 7, 4, 8], playerOne)
simulateGame('P2 Bottom Row Victory', [2, 6, 0, 7, 4, 8], playerTwo)
simulateGame('P1 Left Col Victory', [0, 4, 3, 5, 6], playerOne)
simulateGame('P2 Left Col Victory', [1, 0, 4, 3, 5, 6], playerTwo)
simulateGame('P1 Middle Col Victory', [1, 2, 4, 3, 7], playerOne)
simulateGame('P2 Middle Col Victory', [0, 1, 2, 4, 3, 7], playerTwo)
simulateGame('P1 Right Col Victory', [2, 1, 5, 3, 8], playerOne)
simulateGame('P2 Right Col Victory', [0, 2, 1, 5, 3, 8], playerTwo)
simulateGame('P1 TL to BR Victory', [0, 2, 4, 5, 8], playerOne)
simulateGame('P1 TL to BR Victory', [1, 0, 2, 4, 5, 8], playerTwo)
simulateGame('P2 TR to BL Victory', [2, 1, 4, 3, 6], playerOne)
simulateGame('P2 TR to BL Victory', [0, 2, 1, 4, 3, 6], playerTwo)
simulateGame('Draw Game', [0, 1, 2, 3, 5, 4, 6, 8, 7], playerDraw)

console.log('==================================')
console.log(testsRun + ' TESTS RUN')
if (testsPassed > 0) console.log('%c>' + testsPassed + ' TESTS PASSED', 'color: green')
if (testsFailed > 0) console.log('%c>' + testsFailed + ' TESTS FAILED', 'color: red')

function simulateGame (testTitle, moves, winner) {
  console.log('-------------------------------')
  console.log('Testing: ' + testTitle)
  console.log('-------------------------------')
  restart()

  expect('gameOver should return false at start of game', isGameOver(), false)
  expect('whoWon should return 0 at start of the game', whoWon(), 0)

  for (var i = 0; i < moves.length; ++i) {
    expect('playTurn should allow move to ' + moves[i], playTurn(moves[i]), true)
    expect('playTurn should not allow move to same square', playTurn(moves[0]), false)
  }

  expect('playTurn should not allow move after gameover', playTurn(moves[0]), false)

  expect('whoWon should return ' + winner + ' at end of the game', whoWon(), winner)
}

function expect (expectationMessage, testFunctionResult, returnValue) {
  ++testsRun
  if (testFunctionResult === returnValue) {
    ++testsPassed
    if (showPasses) console.log('%c[PASS] ' + expectationMessage, 'color: green')
  } else {
    ++testsFailed
    console.log('%c[FAIL] ' + expectationMessage + ' but it was ' + testFunctionResult, 'color: red')
  }
}


    console.clear();

    console.log("JS loaded");

    var grid = [null, null, null, null, null, null, null, null, null]
    var player = 1; // =1


//    function choosePlayer(input) {
//        if (input == 'x') {
//            return 1;
//        } else {
//            return 2;
//        }
//    }


    function playTurn(index) {
      if (grid[index] || isGameOver()) {
        return false
      } else {
        grid[index] = player
        if (player === 1) player = 2
        else player = 1
        return true
      }
    }


    function isGameOver() {
      if (whoWon()) {
          return true;
      } else {
      return false;
      }
    }


    function whoWon() {
      if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
      if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
      if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
      if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
      if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
      if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
      if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
      if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
      if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
        grid[5] && grid[6] && grid[7] && grid[8]) return 3
      return 0
    }
    // When resert button is pressed, grid index is resetted
    function restart() {
      grid = [null, null, null, null, null, null, null, null, null]
      player = 1
    }


$(document).ready(function() {
    // Get html event based on the box id that we clicked and pass the id as grid index
    $('.box').on('click', function(event) {
        var $id=event.currentTarget.id
        playTurn(parseInt($id));
        console.log(grid.join("-")) //checking

        //console.log(this);
        console.log(player);
        // Frontend- Displaying playTurn(player) to box as html
        if (player == 1) {
            $(this).html(2);
        } else {
            $(this).html(1);
        }
        console.log(grid);
        console.log(whoWon());
    })


    $('button').on('click', function() {
        console.log('Button clicked')
        window.location.reload();
    })

});


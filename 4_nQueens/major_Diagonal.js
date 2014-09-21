/*
	Complete the function below, which takes an nxn multidmensional array, representing a 
	board position, and a specific major 'Diagonal index': major diagonals go
	from top left to bottom right, and the 'diagonal index' is defined as: colIndex - rowIndex. 
	The function should return whether this board position has a Queen
	conflict for the given major diagonal. 

	'1' represents a queen, and '0' represents an open position for our board.
*/

var hasMajorDiagonalConflictAt =  function(board, majorDiagonalColumnIndexAtFirstRow) {
  //Set start at top row 0 in the column with majorDiagonalColumnIndexAtFirstRow
  var location = [0, majorDiagonalColumnIndexAtFirstRow];
  var numQueens = 0;
  //if location.column < board.length
  if(location[1] < board.rows()) { 
    //Check if there is a queen
    if(board.rows()[location[0]][location[1]] === 1)) {

      //incremenet number of queens counter
      numQueens++;
      // move to bottom right square, row++, column++
      location = [location[0]++, location[1]++];
    } else {
    // else
      // move to bottom right square, row++, column++
      location = [location[0]++, location[1]++];
    }
  }

  // return true if more than one queen, false if one or less
  return numQueens > 1 ? true : false;
}
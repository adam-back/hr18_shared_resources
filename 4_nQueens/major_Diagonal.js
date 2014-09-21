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
  
  //if location.column < board.length
    //Check if there is a queen
      // if yes
        //incremenet number of queens counter
        // move to bottom right square, row++, column++
      // else
        // move to bottom right square, row++, column++

  // return true if more than one queen, false if one or less
}
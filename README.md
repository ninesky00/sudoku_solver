# <div align="center">  Sudoku Solver

## Description
A personal project Sudoku solver built with vanilla JavaScript and html using backtracking approach. 

## Instructions
This application is hosted no longer hosted on Heroku. Fork and clone the repo, then open index.html inside the public folder to open the application.

Chrome browser was used in the entirely of the project, did not check with other browsers.

## Achievements
- Started the project in rails and was successfully able to convert functionality into javascript.
- Dynamically generated html elements for Sudoku board.
- Sudoku core functionalities are working:
check valid Sudoku input by row, column and 3x3 grid,
succesfully solves user puzzle if the puzzle is valid.


## Improvements
- Create space in between puzzle and the answer.
- Limit input to one digit number, currently the input limits to one but allows alpha numeric.
- Event listener for when user has finished the puzzle.
- Disable allowing multiple boards to be generated.
- Create and highlight board for the outer cells and 3x3s to better highlight the puzzle.
- refactor code so not everything is in a chunk.
- Create better CSS and remove white space on page.
- Testing overall, originally started with TDD in rails but haven't learned Javascript testing suite.
- Sudoku seed generator, providing solvable boards for users(currently, there is just a manually entered static board.) (To accomplish this, personally I would implement a random number generator for 15-30 cells depending on difficulty and then run the solve function. Keep if solvable and discard if not.)
- Alert unsolvable if board input is incorrect.

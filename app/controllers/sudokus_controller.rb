class SudokusController < ApplicationController
  before_action :set_sudoku

  # GET /sudokus or /sudokus.json
  def index
    @sudoku = params[:sudoku]
    # @sudoku.solve
    # @solve = @sudoku.solvedboard
  end

  # def solve
  #   sudoku = params[:sudoku]
  #   @solved = sudoku.solve
  #   binding.pry
  # end

  private 
  
  def set_sudoku
    params[:sudoku] = Sudoku.new(board: [[5,3,0,0,7,0,0,0,0],
                                [6,0,0,1,9,5,0,0,0],
                                [0,9,8,0,0,0,0,6,0],
                                [8,0,0,0,6,0,0,0,3],
                                [4,0,0,8,0,3,0,0,1],
                                [7,0,0,0,2,0,0,0,6],
                                [0,6,0,0,0,0,2,8,0],
                                [0,0,0,4,1,9,0,0,5],
                                [0,0,0,0,8,0,0,7,9]])
  end
end

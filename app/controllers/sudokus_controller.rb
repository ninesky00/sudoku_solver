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
    params[:sudoku] = Sudoku.new(board: [[0,1,0,0,7,8,0,0,0],
                                [0,0,0,0,0,9,0,0,5],
                                [9,2,8,0,0,1,0,0,0],
                                [0,0,9,6,0,3,0,2,7],
                                [8,0,0,0,0,0,0,0,0],
                                [6,0,0,0,0,0,5,3,1],
                                [1,0,7,0,0,0,4,9,6],
                                [3,0,0,0,4,5,2,0,0],
                                [0,0,0,1,0,0,0,5,0]])
  end
end

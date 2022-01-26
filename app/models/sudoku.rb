class Sudoku
  include ActiveModel::Model

  attr_accessor :board, :solvedboard

  def solve
    #find empty cell
    #insert options 1-9 based on sudoku constraints
    #repeat with next empty cell
    #until failed constraints
    #backtracking
    #set number to zero
    #increment previous number
    find = find_empty(self.board)
    if !find
      return true
    else
      row, col = find
    end
    for i in 1..9
      if valid(self.board, i, [row, col])
        self.board[row][col] = i
        if solve
          return true
        end
        self.board[row][col] = 0
      end
    end
    self.solvedboard = self.board
    return false
  end

  def valid(board, num, pos)
    #check row
    for i in 0...board[0].length
      if board[pos[0]][i] == num && pos[1] != i 
        return false
      end
    end
  
    #check column
    for i in 0...board.length
      if board[i][pos[1]] == num && pos[0] != i
        return false
      end
    end
  
    #check box
    box_x = pos[1] / 3
    box_y = pos[0] / 3
    for i in box_y*3...box_y*3+3
      for j in box_x*3...box_x*3+3
        if board[i][j] == num && [i, j] != pos
          return false 
        end
      end
    end
    return true
  end

  def find_empty(board)
    for i in 0...board.length 
      for j in 0...board[0].length
        if board[i][j] == 0
          return i, j
        end
      end
    end
    nil
  end
end

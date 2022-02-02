Rails.application.routes.draw do
  root 'sudokus#index'
  resources :sudokus, only: %i[index]
end
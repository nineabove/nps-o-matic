Rails.application.routes.draw do
  resources :ratings, only: [:index, :create]

  namespace :api do
    resources :ratings, only: [:index, :create]
  end

  root to: 'ratings#index'
end

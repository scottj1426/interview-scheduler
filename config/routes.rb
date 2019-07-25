Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: 'json' } do
    resources :slots, only: :index
  end

  match '*path', to: 'pages#index', via: :all
end
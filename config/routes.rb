Rails.application.routes.draw do
  namespace :api do
    get 'controller/slots'
  end
  namespace :api do
    resources :slots
  end

  get '/(*path)', to: 'pages#index'
  get '/employer_schedules', to: 'slots#index'
  get '/schedule_interview', to: 'interview#create'

end
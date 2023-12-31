Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test cookie configuration
  get "/hello", to: "application#hello_world"

  # User and session routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  # Resources
  resources :cats, only: [:index, :update, :destroy, :create]
  resources :shelters, only: [:index]
  resources :applications, only: [:create, :index, :destroy]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

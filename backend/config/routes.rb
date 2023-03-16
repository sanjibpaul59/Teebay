Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  get '/current_user', to: 'application#current_user_json'
  get '/session', to: 'sessions#show'
  delete '/logout', to: 'sessions#destroy'
  resources :transactions
  resources :product_categories
  resources :categories
  resources :products
  resources :users do
    get 'products', to: 'users#products'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

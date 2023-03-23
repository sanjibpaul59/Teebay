Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  get '/current_user', to: 'application#current_user_json'
  delete '/logout', to: 'sessions#destroy'
  resources :transactions
  resources :product_categories
  resources :categories
  resources :products
  resources :users do
    get '/products', to: 'users#products'
    get '/sold_products', to: 'users#sold_products'
    get '/bought_products', to: 'users#bought_products'
    get '/lent_products', to: 'users#lent_products'
    get '/borrowed_products', to: 'users#borrowed_products'
  end
  get "/unsold_products", to: "products#unsold_products"
  post '/products/:product_id/categories/:category_id', to: 'product_categories#create'
  patch '/products/:product_id/categories/:category_id', to: 'product_categories#update'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

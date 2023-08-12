Rails.application.routes.draw do
  get 'search', to: 'search#index'
  get 'about', to: 'pages#about'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get 'profile/:id', to: 'users#profile', as: 'profile'

  # /posts/1/comments/4
  resources :posts do
    resources :comments
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Rails.application.routes.draw do
  #   devise_for :users, controllers: {
  #     sessions: 'users/sessions'
  #   }
  # end

  # Defines the root path route ("/")
  root 'pages#home'
end

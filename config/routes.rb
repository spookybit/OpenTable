Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :favorites, only: [:index, :create, :destroy]
      resources :reservations, only: [:index, :create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :create, :show] do
      resources :reviews, only: [:show, :create]
    end
    resources :locations, only: [:index, :show]
  end
end

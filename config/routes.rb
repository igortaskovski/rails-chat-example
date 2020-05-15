Rails.application.routes.draw do
  root 'chat#index'
  resources :messages, only: [:new, :create]
end

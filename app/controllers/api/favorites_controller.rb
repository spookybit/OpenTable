class Api::FavoritesController < ApplicationController

  def index
    @favorites = User.find_by(id: params[:user_id]).favorites
  end

 def create
   @favorite = Favorite.new(favorite_params)
   @restaurant = Restaurant.find(params[:restaurant_id])
   if @favorite.save
     render 'api/restaurants/show'
   else
     render @favorite.errors.full_messages
   end
 end

 def destroy
   @favorite = Favorite.find(params[:id])
   @restaurant = Restaurant.find(params[:restaurant_id])
   if @favorite
     @favorite.destroy
     render 'api/restaurants/show'
   else
     render json: ["not here"]
   end
 end

 private
 def favorite_params
   params.require(:favorite).permit(:user_id, :restaurant_id, :id)
 end
end

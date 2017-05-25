class Api::FavoritesController < ApplicationController

  def index
    @favorites = User.find(params[:user_id]).favorites
  end

 def create
   @favorite = Favorite.new(favorite_params)

   @restaurant = Restaurant.find(favorite_params[:restaurant_id])

   if @favorite.save
     @favorited = @favorite.id
     render 'api/restaurants/show'
   else
     render @favorite.errors.full_messages
   end
 end

 def destroy
   @fav = User.find(favorite_params[:user_id]).favorites.where(restaurant_id: favorite_params[:restaurant_id])
   @restaurant = Restaurant.find(favorite_params[:restaurant_id])
   if @fav
     @favorited = false
     @fav.first.destroy
    #  Favorite.destroy(@fav.first.id)
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

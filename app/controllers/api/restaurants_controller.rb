class Api::RestaurantsController < ApplicationController
  def index
    name = restaurant_params[:name]
    location = restaurant_params[:location]
    @restaurants = Location.find(restaurant_params[:location_id]).restaurants.where("LOWER(name) LIKE LOWER(?)", "%#{name}%")

    render :index
  end
  # http://localhost:3000/api/restaurants?restaurant[name]=mcdon&restaurant[location_id]=1

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    @favorited = current_user.favorites.where(restaurant_id: @restaurant.id)
    if @favorited.empty?
      @favorited = false
    else
      @favorited.first.id
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:id, :name, :location_id,
      :rating, :price, :hours, :description, :location)
  end

end

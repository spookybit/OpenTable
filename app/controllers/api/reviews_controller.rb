class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    
    @restaurant = Restaurant.find(params[:restaurant_id])
    if @review.save
      render 'api/restaurants/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  # def show
  #   @review = Review.find(params[:id])
  # end

  private
  def review_params
    params.require(:review).permit(:user_id, :restaurant_id, :rating, :date_visited, :description)
  end

end

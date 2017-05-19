class Api::LocationsController < ApplicationController
  def index
    @location = Location.all
  end

  def show
    @location = Location.find(params[:id])
    #maybe in views sort location.restaurants from a has_many relationship
  end

  # private
  # def location_params
  #   ??
  # end
end

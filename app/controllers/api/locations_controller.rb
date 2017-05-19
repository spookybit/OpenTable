class Api::LocationsController < ApplicationController
  def index
    @location = Location.all
  end

  def show
    @location = Location.includes(:restaurants).find_by(location: params[:id])

    if @location
      render "api/locations/show"
    else
      render json: ["can not find location"], status: 401
    end

  end
end

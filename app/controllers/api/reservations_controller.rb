class Api::ReservationsController < ApplicationController

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id
    if @reservation.save
      render :show
    else
      render @reservation.errors.full_messages, status: 422
    end
  end


  private
  def reservation_params
    params.require(:reservation).permit(:restaurant_id, :time_slot, :date, :num_guests)
  end
end

@reservations.each do |reservation|
  json.set! reservation.id do
    json.extract! reservation, :user_id, :restaurant_id, :date, :time_slot, :num_guests, :id
  end
end

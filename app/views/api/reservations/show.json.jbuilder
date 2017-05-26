json.extract! @reservation, :user_id, :restaurant_id, :date, :time_slot, :num_guests, :id

json.restaurant @reservation.restaurant.name

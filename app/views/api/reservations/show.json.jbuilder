json.extract! @reservation, :user_id, :restaurant_id, :date, :time_slot, :num_guests, :id

json.name @reservation.restaurant.name

json.img @reservation.restaurant.img_url

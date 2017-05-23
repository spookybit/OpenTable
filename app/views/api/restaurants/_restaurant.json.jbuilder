json.extract! restaurant, :name, :location_id, :average_rating, :price, :open_time,
  :close_time, :description, :img_url, :id

json.location restaurant.location.location

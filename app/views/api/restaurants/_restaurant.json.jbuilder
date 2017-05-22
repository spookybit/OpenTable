json.extract! restaurant, :name, :location_id, :rating, :price, :open_time,
  :close_time, :description, :img_url

json.location restaurant.location.location

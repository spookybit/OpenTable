@location.restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :price,
      :open_time, :close_time, :img_url, :average_rating
  end
end

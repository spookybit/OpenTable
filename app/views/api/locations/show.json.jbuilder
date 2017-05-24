@location.restaurants.each do |restaurant|
  json.set! restaurant.id do
    # json.location @location.location
    # json.image @location.img_url
    json.extract! restaurant, :id, :name, :price,
      :open_time, :close_time, :img_url, :average_rating
  end
end

# json.location @location.location
# json.image @location.img_url

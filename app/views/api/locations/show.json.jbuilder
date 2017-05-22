@location.restaurants.each do |restaurant|
  json.set! restaurant.id do
    # json.location @location.location
    # json.image @location.img_url
    json.extract! restaurant, :id, :name, :rating, :price,
      :open_time, :close_time, :img_url
  end
end

# json.location @location.location
# json.image @location.img_url

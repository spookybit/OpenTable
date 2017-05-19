# json.set! city do
  @location.restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :name, :rating, :price, :hours, :open_time, :img_url
    end
  end
# end

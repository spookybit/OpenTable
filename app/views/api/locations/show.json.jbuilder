# json.set! city do
  @location.restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :name, :location_id, :rating, :price, :hours, :description, :img_url
    end
  end
# end

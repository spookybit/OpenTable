# json.set! city do
  @location.restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :name, :rating, :price,
        :open_time, :close_time, :img_url
    end
  end
# end

@location.restaurants.each do |restaurant|

  json.set! restaurant.id do
    json.location restaurant.location.location
    json.extract! restaurant, :id, :name, :moneys,
      :open_time, :close_time, :img_url, :average_rating
  end
end

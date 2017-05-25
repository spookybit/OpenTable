@favorites.each do |fav|
  json.set! fav.restaurant.id do
    json.extract! fav.restaurant, :id, :name, :price,
      :open_time, :close_time, :img_url, :average_rating
  end
end

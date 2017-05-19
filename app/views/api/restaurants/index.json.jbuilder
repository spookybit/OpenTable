@restaurant.each do |rest|
  json.set! rest.id do
    json.extract! rest, :id, :name, :location_id, :rating, :price, :hours, :description
  end
end

@restaurant.each do |rest|
  json.set! rest.id do
    json.extract! rest, :id, :name, :location_id, :rating,
      :price, :hours, :description
  end
end

# {
#   1: {
#     id: 1,
#     name: 'rest1'
#   },
#   2: {
#     id: 2,
#     name: 'rest2'
#   }
# }

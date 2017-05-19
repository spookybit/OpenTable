json.array! @restaurants do |r|
  json.partial! 'restaurant', restaurant: r
end

# [
# {
# name: "McDonalds",
# location_id: 5,
# rating: 5,
# price: 1,
# hours: 2,
# description: "The best place ever!",
# img_url: null
# },
# {
# name: "Little Luccas",
# location_id: 6,
# rating: 5,
# price: 2,
# hours: 1,
# description: "Subs",
# img_url: null
# }
# ]


# @restaurant.each do |rest|
#   json.set! rest.id do
#     json.extract! rest, :id, :name, :location_id, :rating,
#       :price, :hours, :description
#   end
# end

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

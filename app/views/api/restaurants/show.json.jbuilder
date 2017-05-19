# create_table "restaurants", force: :cascade do |t|
#   t.string   "name",        null: false
#   t.integer  "location_id", null: false
#   t.integer  "rating"
#   t.integer  "price",       null: false
#   t.integer  "hours",       null: false
#   t.text     "description"
#   t.string   "img_url"

json.partial! 'restaurant', restaurant: @restaurant

# {
# name: "Little Luccas",
# location_id: 6,
# rating: 5,
# price: 2,
# hours: 1,
# description: "Subs",
# img_url: null
# }

# PUT IN PARTIAL
# json.extract! @restaurant, :name, :location_id, :rating, :price, :hours,
#   :description, :img_url


# THIS IS WHAT EXTRACT DOES
# json.name @restaurant.name
# json.location_id @restaurant.location_id

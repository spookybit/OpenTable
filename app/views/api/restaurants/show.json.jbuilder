json.partial! "api/restaurants/restaurant", restaurant: @restaurant

json.reviews @restaurant.reviews do |rev|
  json.username rev.user.username
  json.restaurant rev.restaurant.name
  json.rating rev.rating
  json.date_visited rev.date
  json.description rev.description
end

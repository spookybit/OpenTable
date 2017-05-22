json.partial! 'restaurant', restaurant: @restaurant

json.reviews @restaurant.reviews do |rev|
  json.user_id rev.user_id
  json.restaurant_id rev.restaurant_id
  json.rating rev.rating
  json.date_visited rev.date_visited
  json.description rev.description
end

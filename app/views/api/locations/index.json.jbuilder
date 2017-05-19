# json.array! @location, :id, :location

json.array! @location do |loc|
  # json.set! city do
    json.extract! loc, :id, :location, :img_url
  # end
end

json.array! @location do |loc|
    json.extract! loc, :id, :location, :img_url
end

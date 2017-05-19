# json.extract! @location.restaurants do |restaurant|

json.restaurants @location, :restaurants #includes create time


#edit

# id          :integer          not null, primary key
#  name        :string           not null
#  location_id :integer          not null
#  rating      :integer
#  price       :string           not null
#  hours       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

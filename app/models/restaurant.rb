# == Schema Information
#
# Table name: restaurants
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  location_id :integer          not null
#  rating      :integer
#  price       :string           not null
#  hours       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Restaurant < ApplicationRecord
  belongs_to :location
  has_many :reviews
  has_many :reservations
  has_many :favorites
end

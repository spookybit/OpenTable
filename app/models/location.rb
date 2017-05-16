# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  location   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ApplicationRecord
  validates :location, presence: true
  validates :location, uniqueness: true
  has_many :restaurants
end

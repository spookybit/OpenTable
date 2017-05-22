# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  rating        :integer          not null
#  date_visited  :string           not null
#  description   :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  validates :user_id, :restaurant_id, :rating, :date_visited, :description, presence: true
  # validates :date_visited, numericality: true, length: {is: 8}

  belongs_to :user
  belongs_to :restaurant
end

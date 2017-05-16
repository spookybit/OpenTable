# == Schema Information
#
# Table name: favorites
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Favorite < ApplicationRecord
  validates :user_id, :restaurant_id, presence: true
    validates :user_id, uniqueness: { scope: :restaurant_id, message: "already favorited" }

  belongs_to :user
  belongs_to :restaurant
end

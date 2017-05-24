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
  validates_numericality_of :rating, only_integer: true
  validates_uniqueness_of :user_id, :scope => :restaurant_id

  belongs_to :user
  belongs_to :restaurant

  def date
    date = self.date_visited
    date[5..6] + "/" + date[8..9] + "/" + date[0..3]
  end
end

# == Schema Information
#
# Table name: reservations
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  time_slot     :string           not null
#  date          :string           not null
#  num_guests    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
end

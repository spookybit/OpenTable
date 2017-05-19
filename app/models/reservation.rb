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
  validates :user_id, :restaurant_id, :time_slot, :date, :num_guests, presence: true
  validates :timeslot, numericality: true, length: 8
  validates :date, numericality: true, length: 8

  belongs_to :user
  belongs_to :restaurant
end

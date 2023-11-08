class Shelter < ApplicationRecord
  has_many :cats

  validates :name, :city, presence: true
  validates :name, uniqueness: true
end

class Shelter < ApplicationRecord
  has_many :cats

  validates :name, :city, presence: true
  validates :name, uniqueness: {scope: :city, message: "is taken by a shelter in that city"}
end

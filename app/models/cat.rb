class Cat < ApplicationRecord
  belongs_to :shelter
  has_many :applications, dependent: :destroy
  has_many :users, through: :applications

  validates :name, :age, :sex, :shelter_id, presence: true
  validates :name, length: {in: 3..20}
  validates :age, numericality: {only_integer: true, less_than_or_equal_to: 40, greater_than_or_equal_to: 0}
end

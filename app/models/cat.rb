class Cat < ApplicationRecord
  belongs_to :shelter
  has_many :applications, dependent: :destroy
  has_many :users, through: :applications

  validates :name, :age, :sex, :shelter_id, presence: true
end

class Cat < ApplicationRecord
  has_many :applications, dependent: :destroy
  has_many :users, through: :applications

  belongs_to :shelter

  validates :name, :age, :sex, :shelter_id, presence: true
end

class Cat < ApplicationRecord
  has_many :applications, dependent: :destroy
  has_many :users, through: :applications

  belongs_to :shelter
end

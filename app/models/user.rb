class User < ApplicationRecord
  has_secure_password

  has_many :applications, dependent: :destroy
  has_many :cats, through: :applications
end

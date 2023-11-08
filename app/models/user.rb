class User < ApplicationRecord
  has_secure_password

  has_many :applications, dependent: :destroy
  has_many :cats, through: :applications

  validates :first_name, :last_name, :email, :username, :password, :password_confirmation, presence: true
  validates :username, :email, uniqueness: true
end

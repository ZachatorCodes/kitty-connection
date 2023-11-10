class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :bio

  has_many :applications
  has_many :cats
end

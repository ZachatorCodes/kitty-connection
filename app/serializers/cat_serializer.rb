class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :sex, :shelter_id

  has_many :applications
  has_many :users
end

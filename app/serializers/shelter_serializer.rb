class ShelterSerializer < ActiveModel::Serializer
  attributes :id, :name, :city

  has_many :cats
end

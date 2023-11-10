class ShelterSerializer < ApplicationSerializer
  attributes :id, :name, :city

  has_many :cats
end

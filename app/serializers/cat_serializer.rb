class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :sex

  belongs_to :shelter
  has_many :applications
end

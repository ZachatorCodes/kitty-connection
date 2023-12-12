class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :cat_id, :shelter_name, :cat_name

  belongs_to :shelter
  belongs_to :cat

  def shelter_name
    object.shelter.name
  end

  def cat_name
    object.cat.name
  end
end

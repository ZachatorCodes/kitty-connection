class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :cat_id, :shelter_name, :cat_name

 

  def shelter_name
    object.cat.shelter.name
  end

  def cat_name
    object.cat.name
  end
end

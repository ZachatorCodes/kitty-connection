class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :cat_id
end

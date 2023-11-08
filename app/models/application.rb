class Application < ApplicationRecord
  belongs_to :user
  belongs_to :cat

  validates :user_id, :cat_id, presence: true
  validates :user_id, uniqueness: {scope: :cat_id, message: "can only have one active application per cat"}
end

class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :cat, null: false, foreign_key: true

      t.timestamps
    end
  end
end

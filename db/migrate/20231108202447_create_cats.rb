class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.integer :sex
      t.belongs_to :shelter, null: false, foreign_key: true

      t.timestamps
    end
  end
end

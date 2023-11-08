class CreateShelters < ActiveRecord::Migration[7.0]
  def change
    create_table :shelters do |t|
      t.string :name
      t.string :city

      t.timestamps
    end
  end
end

class AddCatNameToApplications < ActiveRecord::Migration[7.0]
  def change
    add_column :applications, :cat_name, :string
  end
end

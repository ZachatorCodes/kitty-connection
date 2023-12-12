class RemoveCatNameAndShelterNameFromApplications < ActiveRecord::Migration[7.0]
  def change
    remove_column :applications, :cat_name
    remove_column :applications, :shelter_name
  end
end

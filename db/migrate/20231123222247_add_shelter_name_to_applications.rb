class AddShelterNameToApplications < ActiveRecord::Migration[7.0]
  def change
    add_column :applications, :shelter_name, :string
  end
end

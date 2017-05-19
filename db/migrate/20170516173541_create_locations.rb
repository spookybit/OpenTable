class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :location, null: false
      t.string :img_url, null: false

      t.timestamps
    end

    add_index :locations, :location, unique: true
  end
end

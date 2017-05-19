class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :location_id, null: false
      t.integer :rating
      t.integer :price, null: false
      t.string :hours, null: false
      t.text :description
      t.string :img_url
      t.timestamps
    end

    add_index :restaurants, :name
    add_index :restaurants, :location_id
  end
end

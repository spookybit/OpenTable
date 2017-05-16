class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :rating, null: false
      t.string :date_visited, null: false
      t.text :description, null: false

      t.timestamps
    end

    add_index :reviews, [:user_id, :restaurant_id]

  end
end

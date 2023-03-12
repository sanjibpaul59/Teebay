class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.decimal :selling_price
      t.decimal :hourly_rent_amount
      t.decimal :daily_rent_amount
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

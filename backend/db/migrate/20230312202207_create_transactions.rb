class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.references :product, null: false, foreign_key: true
      t.references :seller, null: false, foreign_key: { to_table: :users }
      t.references :buyer, null: false, foreign_key: { to_table: :users }
      t.string :transaction_type
      t.datetime :rent_start_date
      t.datetime :rent_end_date
      t.datetime :selling_date
      t.decimal :price

      t.timestamps
    end
  end
end

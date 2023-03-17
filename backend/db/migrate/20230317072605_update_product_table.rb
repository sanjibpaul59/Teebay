class UpdateProductTable < ActiveRecord::Migration[7.0]
  def change
    change_table :products do |t|
      t.float :rent_amount
      t.string :rent_type
    end
  end
end

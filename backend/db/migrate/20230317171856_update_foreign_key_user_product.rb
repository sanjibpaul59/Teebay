class UpdateForeignKeyUserProduct < ActiveRecord::Migration[7.0]
  def change
    # remove the old foreign_key
    remove_foreign_key :products, :users

    # add the new foreign_key
    add_foreign_key :products, :users, on_delete: :cascade
  end
end

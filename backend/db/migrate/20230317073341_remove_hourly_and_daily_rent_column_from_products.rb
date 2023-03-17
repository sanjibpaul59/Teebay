class RemoveHourlyAndDailyRentColumnFromProducts < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :hourly_rent_amount
    remove_column :products, :daily_rent_amount
  end
end

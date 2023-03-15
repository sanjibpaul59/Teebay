class Product < ApplicationRecord
  belongs_to :user, class_name: 'User', foreign_key: 'user_id'
  has_many :product_categories
  # has_many :categories, through :product_categories

  validates :title, presence: true
  validates :description, presence: true
  validates :user_id, presence: true
  validates :selling_price, numericality: { greater_than_or_equal_to: 0 }
  validates :hourly_rent_amount, numericality: { greater_than_or_equal_to: 0 }
  validates :daily_rent_amount, numericality: { greater_than_or_equal_to: 0 }
end

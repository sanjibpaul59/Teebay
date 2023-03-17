class Product < ApplicationRecord
  belongs_to :user, class_name: 'User', foreign_key: 'user_id'
  has_many :product_categories, dependent: :destroy
  has_many :categories, through: :product_categories
  has_many :transactions, dependent: :destroy

  validates :title, presence: true
  validates :description, presence: true
  validates :user_id, presence: true
  validates :selling_price, numericality: { greater_than_or_equal_to: 0 }, presence: true
  validates :rent_amount, numericality: { greater_than_or_equal_to: 0 }
  validates :rent_type, inclusion: { in: %w(daily hourly), message: "%{value} is not included in the list" }

end

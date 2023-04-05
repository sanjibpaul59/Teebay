class Transaction < ApplicationRecord
  belongs_to :product
  belongs_to :seller, class_name: 'User'
  belongs_to :buyer, class_name: 'User'

  validates :transaction_type, presence: true
  validates :transaction_type, inclusion: { in: %w(buy rent), message: "%{value} is not included in the list" }

end

class Transaction < ApplicationRecord
  belongs_to :product
  belongs_to :seller, class_name: 'User'
  belongs_to :customer, class_name: 'User'
end

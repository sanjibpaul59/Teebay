class User < ApplicationRecord
 has_many :products, dependent: :destroy
 has_many :sold_transactions, foreign_key: "seller_id", class_name: "Transaction"
 has_many :bought_transactions, foreign_key: "buyer_id", class_name: "Transaction"
 has_many :lent_transactions, foreign_key: "seller_id", class_name: "Transaction"
 has_many :borrowed_transactions, foreign_key: "buyer_id", class_name: "Transaction"

 has_many :sold_products, through: :sold_transactions, source: :product
 has_many :bought_products, through: :bought_transactions, source: :product
 has_many :lent_products, through: :lent_transactions, source: :product
 has_many :borrowed_products, through: :borrowed_transactions, source: :product

end

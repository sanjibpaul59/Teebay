class User < ApplicationRecord
 has_many :products, dependent: :destroy
 # validates: email, presence: true, uniqueness: true
end

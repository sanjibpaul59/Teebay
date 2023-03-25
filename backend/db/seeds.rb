# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

users = User.create([{
 first_name: "Alexander",
 last_name: "Supertramp",
 address: "third world country",
 email: "alexander1@mail.com",
 phone_number: "01234567895",
 password: "PassWhat??",
}])

products = Product.create([{
 title: "The best product",
 description: "This is the best product ever",
 selling_price: 100,
 rent_amount: 10,
 rent_type: "daily",
 user_id: 1,
}])

categories = Category.create([{
 category_name: "electronics",
},
{
 category_name: "furniture",
},
{
 category_name: "home appliances",
},
{
 category_name: "sporting goods",
},
{
 category_name: "outdoor",
},
{
 category_name: "toys",
}
])



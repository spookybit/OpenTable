# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User1 = User.create(username: "demo", password: "password")

Location1 = Location.create(location: "Tokyo")
Location2 = Location.create(location: "San Francisco")

Resstaurant1 = Restaurant.create(name: "McDonalds", location_id: 1,
  rating: 5, price: 1, hours: "00002400", description: "The best place ever!")
Restaurant2 = Restaurant.create(name: "Little Luccas", location_id: 2,
  rating: 5, price: 2, hours: "08001730", description: "Subs")

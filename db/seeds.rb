# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User1 = User.create(username: "demo", password: "password")

Location.destroy_all
Location1 = Location.create(location: "Tokyo", img_url: "blank")
Location2 = Location.create(location: "San Francisco", img_url: "blank")

Restaurant.destroy_all
Restaurant1 = Restaurant.create(name: "McDonalds", location_id: Location1.id, rating: 5, price: 1, hours: 2, description: "The best place ever!")
Restaurant2 = Restaurant.create(name: "Little Luccas", location_id: Location2.id,
  rating: 5, price: 2, hours: 1, description: "Subs")

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
Location3 = Location.create(location: "Los Angeles", img_url: "blank")
Location4 = Location.create(location: "New York", img_url: "blank")
Location5 = Location.create(location: "Seattle", img_url: "blank")
Location6 = Location.create(location: "Austin", img_url: "blank")

Restaurant.destroy_all
Restaurant1 = Restaurant.create(name: "McDonalds", location_id: Location1.id,
 rating: 5, price: 1, hours: "000024000", description: "The best place ever!", img_url: "blank")

Restaurant2 = Restaurant.create(name: "Starbucks", location_id: Location1.id,
  rating: 5, price: 1, hours: "000024000", description: "Coffee shop", img_url: "blank")

Restaurant3 = Restaurant.create(name: "Little Luccas", location_id: Location2.id,
  rating: 5, price: 2, hours: "08301730", description: "Subs", img_url: "blank")

Restaurant4 = Restaurant.create(name: "Panda Express", location_id: Location2.id,
  rating: 5, price: 1, hours: "000024000", description: "Orange chicken", img_url: "blank")

Restaurant5 = Restaurant.create(name: "Dairy Queen", location_id: Location3.id,
  rating: 5, price: 1, hours: "000024000", description: "Ice Cream", img_url: "blank")

Restaurant6 = Restaurant.create(name: "Molca Salsa", location_id: Location3.id,
  rating: 5, price: 1, hours: "000024000", description: "$1.63 kids meal", img_url: "blank")

Restaurant7 = Restaurant.create(name: "Grubs", location_id: Location4.id,
  rating: 5, price: 1, hours: "000024000", description: "Grub dub here", img_url: "blank")

Restaurant8 = Restaurant.create(name: "Domino's", location_id: Location4.id,
  rating: 5, price: 1, hours: "000024000", description: "Cheap pizza", img_url: "blank")

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
Location1 = Location.create(location: "Tokyo", img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225011/jpic_jlk1pv.png")
Location2 = Location.create(location: "San Francisco", img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225631/sfpic_aguiew.jpg")
Location3 = Location.create(location: "Los Angeles", img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225635/LApic_mrjpeo.png")
Location4 = Location.create(location: "New York", img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225637/ny_pic_dbmhun.png")
Location5 = Location.create(location: "Seattle", img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225638/seattle_pic_vzizyc.png")
Location6 = Location.create(location: "Austin", img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225640/Austin_ul9gxf.png")

Restaurant.destroy_all
Restaurant1 = Restaurant.create(name: "McDonalds", location_id: Location1.id,
 rating: 5, price: 1, hours: "000024000", description: "The best place ever!", img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant2 = Restaurant.create(name: "Starbucks", location_id: Location1.id,
  rating: 5, price: 1, hours: "000024000", description: "Coffee shop", img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

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

Restaurant9 = Restaurant.create(name: "San Tung", location_id: Location5.id,
  rating: 5, price: 1, hours: "000024000", description: "Ice Cream", img_url: "blank")

Restaurant10 = Restaurant.create(name: "Z & Y", location_id: Location5.id,
  rating: 5, price: 1, hours: "000024000", description: "$1.63 kids meal", img_url: "blank")

Restaurant11 = Restaurant.create(name: "Kome", location_id: Location6.id,
  rating: 5, price: 1, hours: "000024000", description: "Grub dub here", img_url: "blank")

Restaurant12 = Restaurant.create(name: "Eatsa", location_id: Location6.id,
  rating: 5, price: 1, hours: "000024000", description: "Cheap pizza", img_url: "blank")

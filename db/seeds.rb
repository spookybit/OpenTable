# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User1 = User.create(username: "demo", password: "password")
User2 = User.create(username: "hank", password: "password")
User3 = User.create(username: "peggy", password: "password")
User4 = User.create(username: "bobby", password: "password")
User5 = User.create(username: "dale", password: "password")
User6 = User.create(username: "boomhower", password: "password")
User7 = User.create(username: "bill", password: "password")
User8 = User.create(username: "john red corn", password: "password")
User9 = User.create(username: "kahn", password: "password")
User10 = User.create(username: "joseph", password: "password")

Location.destroy_all
Location1 = Location.create(location: "Tokyo",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/v1495225011/jpic_jlk1pv.jpg")
Location2 = Location.create(location: "San Francisco",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225631/sfpic_aguiew.jpg")
Location3 = Location.create(location: "Los Angeles",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225635/LApic_mrjpeo.png")
Location4 = Location.create(location: "New York",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225637/ny_pic_dbmhun.png")
Location5 = Location.create(location: "Seattle",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225638/seattle_pic_vzizyc.png")
Location6 = Location.create(location: "Austin",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225640/Austin_ul9gxf.png")

Restaurant.destroy_all
Restaurant1 = Restaurant.create(name: "McDonalds", location_id: Location1.id,
  price: 1, hours: "00002400", description: "The best place ever!",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant2 = Restaurant.create(name: "Starbucks", location_id: Location1.id,
  price: 1, hours: "00002400", description: "Coffee shop",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant3 = Restaurant.create(name: "Fuunji", location_id: Location1.id,
  price: 2, hours: "11002000", description: "Ramen",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant4 = Restaurant.create(name: "Sushi No Midori", location_id: Location1.id,
  price: 2, hours: "11002100", description: "Sushi",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant5 = Restaurant.create(name: "Lawsons", location_id: Location1.id,
  price: 1, hours: "00002400", description: "Best fried chicken in the world",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant6 = Restaurant.create(name: "Teuchisoba Ebisu", location_id: Location1.id,
  price: 2, hours: "10001700", description: "Sickest soba ever",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")




Restaurant7 = Restaurant.create(name: "Little Luccas", location_id: Location2.id,
  price: 1, hours: "08301730", description: "Subs",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant8 = Restaurant.create(name: "Panda Express", location_id: Location2.id,
  price: 2, hours: "090024000", description: "Orange chicken",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant9 = Restaurant.create(name: "Z and Y", location_id: Location2.id,
price: 3, hours: "11002100", description: "Spicy Szechuan food",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant10 = Restaurant.create(name: "El Farolito", location_id: Location2.id,
price: 2, hours: "11302030", description: "Crazy big burritos",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant11 = Restaurant.create(name: "Ladder Spot", location_id: Location2.id,
price: 4, hours: "11002000", description: "Homecooked food at outrageous prices",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant12 = Restaurant.create(name: "Hipster's Edge", location_id: Location2.id,
price: 4, hours: "16002000", description: "Hipster food that is very artsy",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")




Restaurant13 = Restaurant.create(name: "Alberto's", location_id: Location3.id,
  price: 1, hours: "10302030", description: "Burritos. Why not?",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant14 = Restaurant.create(name: "Molca Salsa", location_id: Location3.id,
  price: 1, hours: "09002100", description: "$1.63 kids meal",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant15 = Restaurant.create(name: "Tom's", location_id: Location3.id,
price: 3, hours: "11002100", description: "Chilli burgers that you regret the next day",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant16 = Restaurant.create(name: "Tailgate", location_id: Location3.id,
price: 4, hours: "11302030", description: "Hipster food for rich kids",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant17 = Restaurant.create(name: "Ke$ha's Restaurant", location_id: Location3.id,
price: 2, hours: "11302030", description: "I'm yellin timburrrrrrrr",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant18 = Restaurant.create(name: "Fried Pickle Land", location_id: Location3.id,
price: 1, hours: "10002000", description: "Artery clogger",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")




Restaurant19 = Restaurant.create(name: "Man's Pizza", location_id: Location4.id,
  price: 1, hours: "10302030", description: "Best pizza in New York",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant20 = Restaurant.create(name: "The Works", location_id: Location4.id,
  price: 2, hours: "09302130", description: "Truly the best pizza in New York",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant21 = Restaurant.create(name: "Grubs", location_id: Location4.id,
price: 3, hours: "10302130", description: "Authentic and best pizza in New York",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant22 = Restaurant.create(name: "Pax", location_id: Location4.id,
price: 1, hours: "09002100", description: "Actually, we are the best pizza in New York",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant23 = Restaurant.create(name: "The Fine Wheel", location_id: Location4.id,
price: 2, hours: "10302030", description: "Dont listen to them. We have the best pizza in New York",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant24 = Restaurant.create(name: "Yanky Dandy", location_id: Location4.id,
price: 3, hours: "10002100", description: "Everyone else is fraudulent. We have the best pizza.",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")




Restaurant25 = Restaurant.create(name: "The Eye", location_id: Location5.id,
  price: 4, hours: "09002100", description: "Sauron's new place ever since the owner lost his jewelry",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant26 = Restaurant.create(name: "Sushimoat", location_id: Location5.id,
  price: 2, hours: "10302030", description: "Yummy sushi at low low prices",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant27 = Restaurant.create(name: "Flying Fish", location_id: Location5.id,
price: 1, hours: "12002100", description: "Fried fish that is hot as my mix tape",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant28 = Restaurant.create(name: "Thunder's Hill", location_id: Location5.id,
price: 2, hours: "11302030", description: "Intense food. Very intense",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant29 = Restaurant.create(name: "Duke's", location_id: Location5.id,
price: 3, hours: "09302100", description: "A place to drink and drink and drink and drink",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant30 = Restaurant.create(name: "Delibird", location_id: Location5.id,
price: 2, hours: "10301730", description: "Fried chicken",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")




Restaurant31 = Restaurant.create(name: "Bat Cave", location_id: Location6.id,
  price: 3, hours: "10302030", description: "Dank hipster food",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant32 = Restaurant.create(name: "Blue Velvet Cake", location_id: Location6.id,
  price: 4, hours: "10001700", description: "Hipster cakes with the finest ingredients",
  img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant33 = Restaurant.create(name: "Hipster's Hat", location_id: Location6.id,
price: 2, hours: "10302030", description: "Freshest craft beers",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant34 = Restaurant.create(name: "Sally's", location_id: Location6.id,
price: 1, hours: "10001900", description: "Get your Alamo Beer here",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant35 = Restaurant.create(name: "Alamo's", location_id: Location6.id,
price: 3, hours: "10301930", description: "Best BBQ in Texas",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant36 = Restaurant.create(name: "Blue Velvet Cake", location_id: Location6.id,
price: 1, hours: "10001900", description: "Hipster cakes with the finest ingredients",
img_url: "http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")


Review.destroy_all
Review1 = Review.create(user_id: User1.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-01-12", description: "It was great")
Review2 = Review.create(user_id: User2.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-03-12", description: "McDonalds is the best")
Review3 = Review.create(user_id: User5.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-02-22", description: "Wow, great fries")
Review4 = Review.create(user_id: User7.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-03-06", description: "Spicy Szechuan Sauce!")
Review5 = Review.create(user_id: User9.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-05-01", description: "Best food in the world")
Review6 = Review.create(user_id: User3.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-02-28", description: "Large fries with that")


Review7 = Review.create(user_id: User1.id, restaurant_id: Restaurant2.id,
  rating: 5, date_visited: "2017-04-30", description: "It was great")
Review8 = Review.create(user_id: User2.id, restaurant_id: Restaurant3.id,
  rating: 5, date_visited: "2017-01-15", description: "It was great")
Review9 = Review.create(user_id: User3.id, restaurant_id: Restaurant4.id,
  rating: 5, date_visited: "2017-05-30", description: "It was great")
Review10 = Review.create(user_id: User4.id, restaurant_id: Restaurant5.id,
  rating: 5, date_visited: "2017-01-14", description: "It was great")
Review11 = Review.create(user_id: User5.id, restaurant_id: Restaurant6.id,
  rating: 5, date_visited: "2017-08-30", description: "It was great")
Review12 = Review.create(user_id: User6.id, restaurant_id: Restaurant7.id,
  rating: 4, date_visited: "2017-01-01", description: "It was great")
Review13 = Review.create(user_id: User7.id, restaurant_id: Restaurant8.id,
  rating: 5, date_visited: "2017-03-30", description: "It was great")


Favorite.destroy_all
Favorite1 = Favorite.create(user_id: 1, restaurant_id: 1)
Favorite2 = Favorite.create(user_id: 1, restaurant_id: 4)
Favorite3 = Favorite.create(user_id: 1, restaurant_id: 6)
Favorite4 = Favorite.create(user_id: 1, restaurant_id: 11)
Favorite5 = Favorite.create(user_id: 2, restaurant_id: 1)
Favorite6 = Favorite.create(user_id: 5, restaurant_id: 1)
Favorite7 = Favorite.create(user_id: 6, restaurant_id: 4)

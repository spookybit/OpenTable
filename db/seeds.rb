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
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/v1495225011/jpic_jlk1pv.jpg")
Location2 = Location.create(location: "San Francisco",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225631/sfpic_aguiew.jpg")
Location3 = Location.create(location: "Los Angeles",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225635/LApic_mrjpeo.png")
Location4 = Location.create(location: "New York",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225637/ny_pic_dbmhun.png")
Location5 = Location.create(location: "Seattle",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225638/seattle_pic_vzizyc.png")
Location6 = Location.create(location: "Austin",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_300/v1495225640/Austin_ul9gxf.png")

Restaurant.destroy_all
Restaurant1 = Restaurant.create(name: "McDonalds", location_id: Location1.id,
  price: 1, hours: "00002400", description: "The best best restaurant in the entire world. $5 for 20 golden chicken mcnuggets is the best deal in the world. McDonald's is Gordon Ramsey's favorite restaurant and is the only restaurant with 4 Michelin Stars.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,q_100,w_250/v1495338000/mcdonalds_js83ta.jpg")

Restaurant2 = Restaurant.create(name: "Starbucks", location_id: Location1.id,
  price: 1, hours: "00002400", description: "Coffee shop. There is free wifi here which makes it a great place to loiter. It is most frequented by coffee lovers and people looking for a power outlet.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/q_100/v1495340043/starbucks_ncuvry.jpg")

Restaurant3 = Restaurant.create(name: "Fuunji", location_id: Location1.id,
  price: 2, hours: "11002000", description: "Amazing ramen in the heart of Tokyo's Shinjuku district. It is very popular with the locals. Be sure to get their specialty, the tsukemen bowl.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634598/yutacar-28290_ce93yf.jpg")

Restaurant4 = Restaurant.create(name: "Sushi No Midori", location_id: Location1.id,
  price: 2, hours: "11002100", description: "Nowhere else can you find such amazing sushi at this price. The tuna platter is especially great and an unbeatable deal for locals and vititors alike.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634676/nils-stahl-188467_stehvd.jpg")

Restaurant5 = Restaurant.create(name: "Lawsons", location_id: Location1.id,
  price: 1, hours: "00002400", description: "Best fried chicken in the world. In the world. Visit late at night for special discount prices.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634701/matt-jones-40269_s21ogt.jpg")

Restaurant6 = Restaurant.create(name: "Teuchisoba Ebisu", location_id: Location1.id,
  price: 2, hours: "10001700", description: "Sickest soba ever. Who could have known that in such a quaint location could there be such a hidden gem. Come for the fresh soba and local, mountian vegetables.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634719/semenov-ivan-191829_t0imyc.jpg")




Restaurant7 = Restaurant.create(name: "Little Luccas", location_id: Location2.id,
  price: 1, hours: "08301730", description: "Best subs in the world. Be sure to get the special garlic and pepper sauce. Even though the atmostphere is cozy, the subs are anything but.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634722/alex-jones-3443_kvacuq.jpg")

Restaurant8 = Restaurant.create(name: "Panda Express", location_id: Location2.id,
  price: 2, hours: "090024000", description: "Orange chicken. Better than any authentic Chinese food. Thousands of years of history have lead to this moment.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634767/patryk-sobczak-162368_lozauc.jpg")

Restaurant9 = Restaurant.create(name: "Z and Y", location_id: Location2.id,
price: 3, hours: "11002100", description: "Spicy Szechuan food. It's spicy. Cant handle the heat, stay out of the restaurant.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495635667/margo-brodowicz-203781_e6cuj4.jpg")

Restaurant10 = Restaurant.create(name: "El Farolito", location_id: Location2.id,
price: 2, hours: "11302030", description: "Crazy big burritos. Apparently it's the best burrito in America says a couple of sites on the internet.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495635691/maia-eli-233485_jokpgc.jpg")

Restaurant11 = Restaurant.create(name: "Ladder Spot", location_id: Location2.id,
price: 4, hours: "11002000", description: "Homecooked food at outrageous prices. The ladders placed throughout the restaurant must be a safety hazzard, not to mention bad luck if you walk under them.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,h_140,w_250/v1495635768/gabriel-gurrola-57461_khpyrg.jpg")

Restaurant12 = Restaurant.create(name: "Hipster's Edge", location_id: Location2.id,
price: 4, hours: "16002000", description: "Hipster food that is very artsy. You've never heard of this place. Actually who put this restaurant online?",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495635778/abdullah-oguk-256739_hgooc4.jpg")



Restaurant13 = Restaurant.create(name: "Molca Salsa", location_id: Location3.id,
price: 1, hours: "09002100", description: "$1.63 kids meal. Their profit margins must be razor thin, or they are hemoraging money. Either way, cheap burritos!",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800584/eduardo-roda-lopes-198465_yqjkh7.jpg")

Restaurant14 = Restaurant.create(name: "Alberto's", location_id: Location3.id,
price: 1, hours: "10302030", description: "Burritos. Why not?",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495635812/roman-bozhko-251412_bzv5hd.jpg")

Restaurant15 = Restaurant.create(name: "Tom's", location_id: Location3.id,
price: 3, hours: "11002100", description: "Chilli burgers that you regret the next day. You'll question your life decisions after this one.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800584/shanice-garcia-41911_tuflbk.jpg")

Restaurant16 = Restaurant.create(name: "Tailgate", location_id: Location3.id,
price: 4, hours: "11302030", description: "Hipster food for rich kids. It's so underground it's actually in China.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800584/matt-alaniz-138461_cw6f8i.jpg")

Restaurant17 = Restaurant.create(name: "Ke$ha's Restaurant", location_id: Location3.id,
price: 2, hours: "11302030", description: "I'm yellin timburrrrrrrr. Tik tok, it's time to go to Ke$ha's restaurant.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800585/armando-ascorve-morales-202237_twrnfm.jpg")

Restaurant18 = Restaurant.create(name: "Fried Pickle Land", location_id: Location3.id,
price: 1, hours: "10002000", description: "Artery clogger. Fried pickles are our specialy, but if you want anything else deep fried we'll gladly take requests.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800587/sebastian-lp-158732_qmfsau.jpg")




Restaurant19 = Restaurant.create(name: "Man's Pizza", location_id: Location4.id,
  price: 1, hours: "10302030", description: "Best pizza in New York. Our authentic pizza is hand made every day with mom's special recipe.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800587/alex-munsell-18756_tn6zcz.jpg")

Restaurant20 = Restaurant.create(name: "The Works", location_id: Location4.id,
  price: 2, hours: "09302130", description: "Truly the best pizza in New York. The secret to a good pizza is the ingredients.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800589/neven-krcmarek-175838_ibpnuc.jpg")

Restaurant21 = Restaurant.create(name: "Grubs", location_id: Location4.id,
price: 3, hours: "10302130", description: "Authentic and best pizza in New York. We haven't changed our recipe in 300 years.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800598/caroline-attwood-225623_nwtpj1.jpg")

Restaurant22 = Restaurant.create(name: "Pax", location_id: Location4.id,
price: 1, hours: "09002100", description: "Actually, we are the best pizza in New York. The history of our pizza's go back to the stone age.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634598/yutacar-28290_ce93yf.jpg")

Restaurant23 = Restaurant.create(name: "The Fine Wheel", location_id: Location4.id,
price: 2, hours: "10302030", description: "Dont listen to them. We have the best pizza in New York. You cant rush a good pizza.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634676/nils-stahl-188467_stehvd.jpg")

Restaurant24 = Restaurant.create(name: "Yanky Dandy", location_id: Location4.id,
price: 3, hours: "10002100", description: "Everyone else is fraudulent. We have the best pizza. Finally, a pizza place that WONT poison you.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634701/matt-jones-40269_s21ogt.jpg")




Restaurant25 = Restaurant.create(name: "The Eye", location_id: Location5.id,
  price: 4, hours: "09002100", description: "Sauron's new place ever since he lost his jewelry. He's been finding success cooking in the fires of Mordor.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634719/semenov-ivan-191829_t0imyc.jpg")

Restaurant26 = Restaurant.create(name: "Sushimoat", location_id: Location5.id,
  price: 2, hours: "10302030", description: "We're no strangers to love. You know the rules, and so do I.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634722/alex-jones-3443_kvacuq.jpg")

Restaurant27 = Restaurant.create(name: "Flying Fish", location_id: Location5.id,
price: 1, hours: "12002100", description: "Fried fish that is hot as my mix tape. Just kidding. Nothing is as hot as my mix tape.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495634767/patryk-sobczak-162368_lozauc.jpg")

Restaurant28 = Restaurant.create(name: "Thunder's Hill", location_id: Location5.id,
price: 2, hours: "11302030", description: "Intense food. Very intense. You cant handle this food. It's full of stuff that keeps you PUMPED!",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495635667/margo-brodowicz-203781_e6cuj4.jpg")

Restaurant29 = Restaurant.create(name: "Duke's", location_id: Location5.id,
price: 3, hours: "09302100", description: "A place to drink and drink and drink and drink and drink and drink and drink.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495635691/maia-eli-233485_jokpgc.jpg")

Restaurant30 = Restaurant.create(name: "Delibird", location_id: Location5.id,
price: 2, hours: "10301730", description: "Fried chicken. Do you ever wonder what they eat in the Pokemon world? Like, do they have cows?",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,h_140,w_250/v1495635768/gabriel-gurrola-57461_khpyrg.jpg")




Restaurant31 = Restaurant.create(name: "Bat Cave", location_id: Location6.id,
  price: 3, hours: "10302030", description: "Dank hipster food. This place is so underground you'll never find it.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495635778/abdullah-oguk-256739_hgooc4.jpg")

Restaurant32 = Restaurant.create(name: "Blue Velvet Cake", location_id: Location6.id,
  price: 4, hours: "10001700", description: "Hipster cakes with the finest ingredients. The ingredients all come from locations you've never heard of.",
  img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495635812/roman-bozhko-251412_bzv5hd.jpg")

Restaurant33 = Restaurant.create(name: "Hipster's Hat", location_id: Location6.id,
price: 2, hours: "10302030", description: "Freshest craft beers. We won some brewing contest that you've never heard of, and we dont do wide distribution.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800584/eduardo-roda-lopes-198465_yqjkh7.jpg")

Restaurant34 = Restaurant.create(name: "Sally's", location_id: Location6.id,
price: 1, hours: "10001900", description: "Get your Alamo Beer here, I tell you what. Yep. Yep. Yeeeep. Hmmmhmmmm.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800584/shanice-garcia-41911_tuflbk.jpg")

Restaurant35 = Restaurant.create(name: "Alamo's", location_id: Location6.id,
price: 3, hours: "10301930", description: "Best BBQ in Texas. Dont confuse this Alamo's with any of the 13 other similarly named Alamo locations.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800584/matt-alaniz-138461_cw6f8i.jpg")

Restaurant36 = Restaurant.create(name: "Blue Velvet Cake", location_id: Location6.id,
price: 1, hours: "10001900", description: "Hipster cakes with the finest ingredients. Their cakes are smoother than our waxed mustaches.",
img_url: "https://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_250/v1495800585/armando-ascorve-morales-202237_twrnfm.jpg")


Review.destroy_all
Review1 = Review.create(user_id: User2.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-01-12", description: "McDonalds is truly the greatest restaurant in the world. I love McDonalds more than my mom's home cooking, I tell you what. They must use propane and propane accessories.")
Review2 = Review.create(user_id: User3.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-03-12", description: "I would rather eat at McDonald's than any Michelin starred restaurant. Their french fries are world class.")
Review3 = Review.create(user_id: User5.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-02-22", description: "The government is hiding many secrets. What they cant hide is the amazing flavor of McDonalds.")
Review4 = Review.create(user_id: User7.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-03-06", description: "Spicy Szechuan Sauce!")
Review5 = Review.create(user_id: User9.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-05-01", description: "I dont usually go to places where they commoners go, but I make an exception for McDonald's 20 piece nugget deal.")
Review6 = Review.create(user_id: User10.id, restaurant_id: Restaurant1.id,
rating: 5, date_visited: "2017-02-28", description: "I always want large fries with that.")

Review7 = Review.create(user_id: User4.id, restaurant_id: Restaurant2.id,
rating: 5, date_visited: "2017-02-28", description: "Who would have ever thought there would be such amazing food in such a location!")
Review8 = Review.create(user_id: User6.id, restaurant_id: Restaurant2.id,
rating: 5, date_visited: "2017-01-23", description: "We're no strangers to love. You know the rules and so do I.")
Review9 = Review.create(user_id: User8.id, restaurant_id: Restaurant2.id,
rating: 5, date_visited: "2017-05-12", description: "Darude sandstorm tells me this food is amazing.")
Review10 = Review.create(user_id: User1.id, restaurant_id: Restaurant2.id,
rating: 5, date_visited: "2017-01-18", description: "Coffee that leaves me thinking about life in my skinny jeans.")
Review11 = Review.create(user_id: User3.id, restaurant_id: Restaurant2.id,
rating: 5, date_visited: "2017-03-28", description: "I always want large fries with that.")
Review12 = Review.create(user_id: User5.id, restaurant_id: Restaurant2.id,
rating: 5, date_visited: "2017-01-01", description: "I like the food they have here. It is great.")

Review13 = Review.create(user_id: User1.id, restaurant_id: Restaurant3.id,
rating: 1, date_visited: "2017-02-28", description: "Who fired brad's wife? On his birthday, no less.")
Review14 = Review.create(user_id: User3.id, restaurant_id: Restaurant3.id,
rating: 5, date_visited: "2017-01-23", description: "We're no strangers to love. You know the rules and so do I. A real restaurant is what I'm thinking of.")
Review15 = Review.create(user_id: User6.id, restaurant_id: Restaurant3.id,
rating: 5, date_visited: "2017-05-12", description: "Freshest noodles I have ever had. I cant wait to slurp them up again!")
Review16 = Review.create(user_id: User4.id, restaurant_id: Restaurant3.id,
rating: 5, date_visited: "2017-01-18", description: "I could literally drown in a bowl and be ok with that.")
Review17 = Review.create(user_id: User8.id, restaurant_id: Restaurant3.id,
rating: 2, date_visited: "2017-03-28", description: "This was a very odd spaghetti meal. I was very confused.")
Review18 = Review.create(user_id: User10.id, restaurant_id: Restaurant3.id,
rating: 2, date_visited: "2017-01-01", description: "I dont usually like noodles... so I'm giving this a bad review.")

Review19 = Review.create(user_id: User5.id, restaurant_id: Restaurant4.id,
rating: 1, date_visited: "2017-02-28", description: "I am alergic to seafood. Why did I eat heeeerreeee???")
Review20 = Review.create(user_id: User2.id, restaurant_id: Restaurant4.id,
rating: 5, date_visited: "2017-01-03", description: "Raw fish is pretty amazing, it turns out.")
Review21 = Review.create(user_id: User1.id, restaurant_id: Restaurant4.id,
rating: 5, date_visited: "2017-05-12", description: "So I stumbled into here on accident, and it was the second best mistake of my life!")
Review22 = Review.create(user_id: User6.id, restaurant_id: Restaurant4.id,
rating: 5, date_visited: "2017-02-18", description: "Sushi ymmm")
Review23 = Review.create(user_id: User8.id, restaurant_id: Restaurant4.id,
rating: 4, date_visited: "2017-04-26", description: "The lond wait was pretty bad, but at least the food was good.")
Review24 = Review.create(user_id: User9.id, restaurant_id: Restaurant4.id,
rating: 4, date_visited: "2017-01-02", description: "Worth coming to if you have time for a long wait. I missed the birth of my son waiting in line, but it was worth it.")

Review25 = Review.create(user_id: User3.id, restaurant_id: Restaurant5.id,
rating: 5, date_visited: "2017-01-18", description: "Some cheap stuff. It provides for my degenerate needs")
Review26 = Review.create(user_id: User6.id, restaurant_id: Restaurant5.id,
rating: 3, date_visited: "2017-03-28", description: "I rate their food 9/10, but the service was lacking")
Review27 = Review.create(user_id: User7.id, restaurant_id: Restaurant5.id,
rating: 4, date_visited: "2017-01-01", description: "I cant wait to eat here again")

Review28 = Review.create(user_id: User6.id, restaurant_id: Restaurant6.id,
rating: 5, date_visited: "2017-03-04", description: "I got lost and stumbled my way here. Amazing food, but now I cant find my way back...")
Review29 = Review.create(user_id: User8.id, restaurant_id: Restaurant6.id,
rating: 5, date_visited: "2017-04-08", description: "This is the best meal I have ever had in my life.")
Review30 = Review.create(user_id: User9.id, restaurant_id: Restaurant6.id,
rating: 5, date_visited: "2017-01-21", description: "I cant believe I'm moving away from this place next month... :(")

Review28 = Review.create(user_id: User6.id, restaurant_id: Restaurant7.id,
rating: 5, date_visited: "2017-03-24", description: "I go here every week. It's great!")
Review29 = Review.create(user_id: User8.id, restaurant_id: Restaurant7.id,
rating: 4, date_visited: "2017-04-18", description: "I cant believe how long the line was, and I cant believe I would do it again.")
Review30 = Review.create(user_id: User9.id, restaurant_id: Restaurant7.id,
rating: 5, date_visited: "2017-01-21", description: "My girlfriend broke up with me here. But at least I got a dope sandwhich.")
Review28 = Review.create(user_id: User6.id, restaurant_id: Restaurant7.id,
rating: 3, date_visited: "2017-02-12", description: "The bread hurts my gums.")
Review29 = Review.create(user_id: User8.id, restaurant_id: Restaurant7.id,
rating: 1, date_visited: "2017-02-18", description: "I waited an hour in line for a sandwhich. A sandwhich. The place is cramped, and there is no air conditioning.")
Review30 = Review.create(user_id: User9.id, restaurant_id: Restaurant7.id,
rating: 5, date_visited: "2017-04-23", description: "I always go for the spicy buffalo sandwhich. It tastes amazing!")

Review31 = Review.create(user_id: User3.id, restaurant_id: Restaurant8.id,
rating: 5, date_visited: "2017-02-12", description: "I am Chinese, and I am going to let you all know that the orange chicken from Panda Express is the best Chinese food I've ever had.")
Review32 = Review.create(user_id: User8.id, restaurant_id: Restaurant8.id,
rating: 1, date_visited: "2017-02-18", description: "I'm just here because Panda Express fired me for sleeping on the job.")
Review33 = Review.create(user_id: User7.id, restaurant_id: Restaurant8.id,
rating: 3, date_visited: "2017-04-23", description: "I cant believe I am leaving a review for Panda Express. What is my life?")

Review34 = Review.create(user_id: User2.id, restaurant_id: Restaurant9.id,
rating: 5, date_visited: "2017-02-12", description: "I love propane and propane accessories.")
Review35 = Review.create(user_id: User3.id, restaurant_id: Restaurant9.id,
rating: 5, date_visited: "2017-02-18", description: "I'm literally only here because I get paid money to give restaurants good online reviews.")

Review36 = Review.create(user_id: User5.id, restaurant_id: Restaurant10.id,
rating: 4, date_visited: "2017-01-12", description: "This is the best place to go at 1AM at night.")
Review37 = Review.create(user_id: User6.id, restaurant_id: Restaurant10.id,
rating: 5, date_visited: "2017-01-01", description: "Wooaah, I woke up here after New Year's Eve, and the employees gave me a free burrito. What homies.")

Review38 = Review.create(user_id: User2.id, restaurant_id: Restaurant11.id,
rating: 1, date_visited: "2017-02-12", description: "This is the worst restaurant I have ever been to. A ladder fell on top of me.")

Review39 = Review.create(user_id: User4.id, restaurant_id: Restaurant12.id,
rating: 2, date_visited: "2017-04-11", description: "I thought I liked hipsters until I spent a whole evening surrounded by them. The food was so strange, and the music was horrible.")
Review40 = Review.create(user_id: User7.id, restaurant_id: Restaurant12.id,
rating: 5, date_visited: "2017-02-28", description: "The best place to come to to hear a live band you've never heard of.")

Review40 = Review.create(user_id: User8.id, restaurant_id: Restaurant13.id,
rating: 5, date_visited: "2017-03-19", description: "$1.63 carne asada kids burrito with french fries. Enough said.")
Review41 = Review.create(user_id: User4.id, restaurant_id: Restaurant13.id,
rating: 5, date_visited: "2017-04-08", description: "This place is grimey as hell, but I love trashy things so who am I to complain?")
Review42 = Review.create(user_id: User6.id, restaurant_id: Restaurant13.id,
rating: 1, date_visited: "2017-05-25", description: "I got food poinson from going here. Avoid at all cost!")
Review43 = Review.create(user_id: User7.id, restaurant_id: Restaurant13.id,
rating: 2, date_visited: "2017-02-27", description: "The food was pretty good, but I felt scared the whole time I was here. I can see why people love it though.")
Review44 = Review.create(user_id: User9.id, restaurant_id: Restaurant13.id,
rating: 3, date_visited: "2017-01-16", description: "It's ok, I guess. Ive had better.")
Review45 = Review.create(user_id: User10.id, restaurant_id: Restaurant13.id,
rating: 2, date_visited: "2017-01-08", description: "The restaurant is depressing to be inside.")

Review46 = Review.create(user_id: User3.id, restaurant_id: Restaurant14.id,
rating: 3, date_visited: "2017-02-27", description: "Extremely mediocre.")
Review47 = Review.create(user_id: User2.id, restaurant_id: Restaurant14.id,
rating: 4, date_visited: "2017-01-16", description: "This is a 1337 burrito.")
Review48 = Review.create(user_id: User8.id, restaurant_id: Restaurant14.id,
rating: 3, date_visited: "2017-01-08", description: "Have you ever noticeed that burritos are just bigger tacos?")

Review49 = Review.create(user_id: User8.id, restaurant_id: Restaurant15.id,
rating: 3, date_visited: "2017-02-03", description: "Toms gets 0/5 stars for what it did to my stomach, but it gets 3 points back because I would do it again.")

Review50 = Review.create(user_id: User3.id, restaurant_id: Restaurant16.id,
rating: 4, date_visited: "2017-02-03", description: "Excellent burgers")


Review51 = Review.create(user_id: User2.id, restaurant_id: Restaurant17.id,
rating: 2, date_visited: "2017-02-07", description: "Waking up in the morning feeling like P Diddy.")
Review52 = Review.create(user_id: User5.id, restaurant_id: Restaurant17.id,
rating: 3, date_visited: "2017-04-03", description: "Grab my glasses, Im out the door, Im gonna hit this city")
Review53 = Review.create(user_id: User6.id, restaurant_id: Restaurant17.id,
rating: 5, date_visited: "2017-03-04", description: "Before I leave, brush my teet with a bottle of Jack")
Review54 = Review.create(user_id: User7.id, restaurant_id: Restaurant17.id,
rating: 4, date_visited: "2017-02-14", description: "Cause when I leave for the night, I aint coming back")

Review55 = Review.create(user_id: User7.id, restaurant_id: Restaurant18.id,
rating: 1, date_visited: "2017-04-18", description: "Just barf")

Review56 = Review.create(user_id: User10.id, restaurant_id: Restaurant19.id,
rating: 2, date_visited: "2017-02-07", description: "I mean, even a bad pizza is pretty good...")
Review57 = Review.create(user_id: User5.id, restaurant_id: Restaurant19.id,
rating: 4, date_visited: "2017-05-16", description: "I know my pizza, and this is pretty good.")
Review58 = Review.create(user_id: User2.id, restaurant_id: Restaurant19.id,
rating: 5, date_visited: "2017-03-18", description: "Ive been going to this spot for years!")
Review59 = Review.create(user_id: User4.id, restaurant_id: Restaurant19.id,
rating: 5, date_visited: "2017-02-18", description: "Why cant I lose weight? This shop if your answer...")

Review60 = Review.create(user_id: User1.id, restaurant_id: Restaurant20.id,
rating: 4, date_visited: "2017-03-18", description: "Do I even exit? I feel like my actions are outside my own control...")
Review61 = Review.create(user_id: User2.id, restaurant_id: Restaurant20.id,
rating: 2, date_visited: "2017-02-18", description: "The dough was too doughey")

Review62 = Review.create(user_id: User10.id, restaurant_id: Restaurant21.id,
rating: 4, date_visited: "2017-05-18", description: "I found a cockroach in my pizza! It was great!")
Review63 = Review.create(user_id: User4.id, restaurant_id: Restaurant21.id,
rating: 2, date_visited: "2017-01-28", description: "My pizza with cockroaches took forever...")

Review64 = Review.create(user_id: User3.id, restaurant_id: Restaurant22.id,
rating: 2, date_visited: "2017-01-28", description: "My name is demo, and I think I am losing my memory because I dont remember commenting on this...")

Review63 = Review.create(user_id: User2.id, restaurant_id: Restaurant23.id,
rating: 4, date_visited: "2017-04-25", description: "The meatlovers pizza is great")
Review63 = Review.create(user_id: User7.id, restaurant_id: Restaurant23.id,
rating: 4, date_visited: "2017-02-23", description: "The vegetarian pizza is great")

Review64 = Review.create(user_id: User8.id, restaurant_id: Restaurant24.id,
rating: 5, date_visited: "2017-02-26", description: "Is anyone ever NOT in the mood for pizza??!!")


Review65 = Review.create(user_id: User3.id, restaurant_id: Restaurant25.id,
rating: 5, date_visited: "2017-03-18", description: "Mordor's finest pizza")
Review66 = Review.create(user_id: User5.id, restaurant_id: Restaurant25.id,
rating: 5, date_visited: "2017-04-28", description: "This place is so fresh! I love Sauron!")
Review67 = Review.create(user_id: User6.id, restaurant_id: Restaurant25.id,
rating: 4, date_visited: "2017-05-03", description: "The orcs really know how to throw a party.")
Review68 = Review.create(user_id: User8.id, restaurant_id: Restaurant25.id,
rating: 1, date_visited: "2017-05-18", description: "Why are there no guard rails? My friend slipped and fell into the volcano...")
Review64 = Review.create(user_id: User2.id, restaurant_id: Restaurant25.id,
rating: 5, date_visited: "2017-04-18", description: "Nothing like a fresh pizza out of the propane oven.")
Review65 = Review.create(user_id: User4.id, restaurant_id: Restaurant25.id,
rating: 4, date_visited: "2017-04-18", description: "Orcs!")

Review66 = Review.create(user_id: User10.id, restaurant_id: Restaurant26.id,
rating: 5, date_visited: "2017-01-18", description: "It was great!")
Review67 = Review.create(user_id: User9.id, restaurant_id: Restaurant26.id,
rating: 4, date_visited: "2017-04-28", description: "Cant stop wont stop.")

Review68 = Review.create(user_id: User4.id, restaurant_id: Restaurant27.id,
rating: 1, date_visited: "2017-04-18", description: "Worst food I have ever had!")

Review69 = Review.create(user_id: User5.id, restaurant_id: Restaurant28.id,
rating: 5, date_visited: "2017-03-21", description: "Awwwww yeeeaaaahhhh!!!!")

Review70 = Review.create(user_id: User2.id, restaurant_id: Restaurant29.id,
rating: 5, date_visited: "2017-24-18", description: "Duke's is my dogs name. Therefor I give this 5 stars.")

Review71 = Review.create(user_id: User7.id, restaurant_id: Restaurant30.id,
rating: 5, date_visited: "2017-21-18", description: "This is the strangest chicken I've ever had.")
Review72 = Review.create(user_id: User10.id, restaurant_id: Restaurant30.id,
rating: 5, date_visited: "2017-14-18", description: "I cant tell what is different about this meat, but it is great!")






Favorite.destroy_all
Favorite1 = Favorite.create(user_id: 1, restaurant_id: 1)
Favorite2 = Favorite.create(user_id: 1, restaurant_id: 4)
Favorite3 = Favorite.create(user_id: 1, restaurant_id: 6)
Favorite4 = Favorite.create(user_id: 1, restaurant_id: 11)
Favorite5 = Favorite.create(user_id: 2, restaurant_id: 1)
Favorite6 = Favorite.create(user_id: 5, restaurant_id: 1)
Favorite7 = Favorite.create(user_id: 6, restaurant_id: 4)

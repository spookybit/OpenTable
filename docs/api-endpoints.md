root:
GET /

users:
POST /api/users
PATCH /api/users

session:
POST /api/session
DELETE /api/session

restaurants:
GET /api/:location/restaurants
  index
POST /api/:location/restaurants
GET /api/:location/restaurants/:id
PATCH /api/:location/restaurants/:id

reviews:
GET /api/:location/:restaurants/:id/reviews
  index
GET /api/:location/:restaurants/:id/reviews/:id
POST /api/:location/:restaurants/:id/reviews
PATCH /api/:location/:restaurants/:id/reviews/:id
DELETE /api/:location/:restaurants/:id/reviews/:id

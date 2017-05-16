## Component Hierarchy

**Home Container**
  - Locations Container
  - Restaurant Search Container
    - mapStateToProps: localRestaurants
    - mapDispatchToProps: requestCreateReservation, requestSingleRestaurant

**Location Container**
  - mapStateToProps: restaurants
  - mapDispatchToProps: requestAllRestaurants
  - Restaurant Index

**Local Restaurant Container**
  -mapStateToProps: localRestaurants

**Restaurant Container**
  - mapStateToProps: singleRestaurant
  - mapDispatchToProps: requestSingleRestaurant

  + Sidebar
    - Reservation
    - About Info
    - Menu
    - Reviews

  - Reservation Form Component
    mapStateToProps: requestLocalRestaurants
    mapStateDispatchToProps: requestSingleRestaurant
  - About Info
    - restaurant.description
  - Menu Link
  - Reviews Component
    + Form Container
      - mapDispatchToProps: requestCreateReview


## restaurants
Path                  | Component
----------------------|-----------
"/sign-up"            | "AuthFormContainer"   
"/sign-in"            | "AuthFormContainer"
"/home"               | "LocationsContainer"    
"/:location"          | "LocalRestaurantContainer"
"/:id"                | "RestaurantContainer"  
"/:id/:reviewId"      | "ReviewContainer"    
"/:id/reservation"    | "ReservationComponent"

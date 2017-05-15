##Component Hierarchy

**Home Container**
  - Locations
  - Reservation Search

**Location Container**
  - Restaurant Index

**Restaurant Container**
  - mapStateToProps: restaurants
  - mapDispatchToProps: requestAllRestaurants

  + Sidebar
    - Reservation
    - About Info
    - Photos
    - Menu
    - Reviews

  - Reservation Form Component
  - Popular Dishes Container
  - About Info
  + Photos Container
    - mapStateToProps: restaurant (object)
    - mapDispatchToProps: requestSingleRestaurant
  - Menu Link
  + Reviews Container
    - mapStateToProps: restaurant (object)
    - mapDispatchToProps: requestSingleRestaurant
    + Form Container
      - mapDispatchToProps: requestCreateReview
      - Inputs: Rating, Date Visited, Text, [Food, Ambience, Service, Value]
    + Review Index Container
      + Review Post Container
        + Props:
          + Restaurant Object:
            - Rating, Date Visited, Text, Food, Ambience, Service, Value

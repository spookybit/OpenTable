```js
{
  session: {
    currentUser: {
      id: 1,
      username: "random",
      favorites: ["restaurantIndexNumbers"]
      reservations: [{restaurantName: {date: 010101, time-slot: 15301600, guests: 5}}]
    },
    errors: []
  }
  restaurantIndex: {
    1: {
      name: "McDonalds",
      location: "random",
      rating: 5,
      price: 4,
      id: 5,
      hours: 09002030,
      description: "McDonalds for life",
      img_url: "img_url",
      reviews: {
        id: {
          restaurantIndexId: 1,
          Rating: 5
          Date Visited: "12/12/12"
          Text: "Good",
          img: "img_url"
        }
      }
    }
  },
  currentLocation: {
    id: {
      id: 1
      location: "Tokyo",
      img: "img_url"
    }
  },
  allLocations: {
    [{id: {id: 1, location: "Tokyo", img: "img_url"}},
    {id: {id: 2, location: "San Francisco", img: "img_url"}}]
  }
}
```
<!-- entry file get array of locations at index page didMount -->

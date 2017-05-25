import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchContainer from '../search/search_container';

class HomeIndex extends React.Component {
  constructor(props) {
    super (props);
  }

  componentDidMount() {
    this.props.allLocations();
  }

  citiesList() {
    const cities = this.props.cities;
    return cities.map((city, idx) => {
      return <Link to={`/city/${city.location}`} key={idx}>{city.location}</Link>;
    });
  }

  citiesPhoto() {
    const cities = this.props.cities;
    return cities.map((city, idx) => {
      return (
        <Link to={`/city/${city.location}`} key={idx} className="indexCityBackground">
          <img src={city.img_url} key={idx} />
          <p>{city.location}</p>
        </Link>
      );
    });
  }


  render() {
    return (
      <div className="pageCenter indexMain">
        <img src="http://res.cloudinary.com/drgxeu7sx/image/upload/v1495323223/index-header_rnrgje.jpg" />
        <SearchContainer />
        <div className="featured">
          <h2>Featured cities</h2>
          <div className="indexPhotos">
            {this.citiesPhoto()}

          </div>

          <ul className="mainIndexList">
            {this.citiesList()}
          </ul>

        </div>
      </div>
    );
  }

}

export default withRouter(HomeIndex);

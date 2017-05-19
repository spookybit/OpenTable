import React from 'react';
import { Link } from 'react-router-dom';

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
      return <Link to={`/${city.id}`} key={idx}>{city.location}</Link>;
    });
  }

  citiesPhoto() {
    const cities = this.props.cities;
    return cities.map((city, idx) => {
      return <img src={city.img_url} key={idx} />;
    });
  }


  render() {
    return (
      <div>
        <div className="indexPhotos">
          {this.citiesPhoto()}

        </div>

        <ul>
          {this.citiesList()}
        </ul>
      </div>
    );
  }

}

export default HomeIndex;

import React from "react";
class RandomPlaceComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      place: {}
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:4000/api/areas/5d4313ab4e41702ed0d671be/places/random`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          mode: "cors"
        }
      }
    )
      .then(res => res.json())
      .then(place => {
        this.setState({
          place
        });
      });
  }

  render() {
    const { place } = this.state;
    return (
      <main className="content">
        <section className="content__item">
          <h3 className="restaurant-content">{place.name}</h3>
          <ul className="placeInfoList">
            <li>Price: {place.price}</li>
            <li>Category: {place.category}</li>
            <li>Rating: {place.rating / 10}</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default RandomPlaceComponent;

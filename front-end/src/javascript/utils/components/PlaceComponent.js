import React from "react";

class PlaceComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      randomPlace: {}
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:4000/api/areas/5d4313ab4e41702ed0d671be/places/random",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          mode: "cors"
        }
      }
    )
      .then(res => res.json())
      .then(randomPlace => {
        this.setState({
          randomPlace
        });
      });
  }

  render() {
    const { randomPlace } = this.state;
    return (
      <ul className="generatedPlaces">
        <li>{randomPlace.name}</li>
      </ul>
    );
  }
}

export default PlaceComponent;

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '60%'
};

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      lat: this.props.lat,
      long: this.props.long
    };
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: this.state.long,
          lng: this.state.lat
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCfHElWY6iblnS-6RrlhaENB2ke-nF2QyQ'
})(GoogleMap);

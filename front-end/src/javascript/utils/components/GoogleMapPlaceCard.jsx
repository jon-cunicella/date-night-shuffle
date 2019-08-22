import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '40%'
};

export class GoogleMapPlaceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    this.displayPaper();
  };
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  displayPaper = () => {
    return <p>{this.props.name}</p>;
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: this.props.long,
          lng: this.props.lat
        }}
      >
        <Marker
          position={{
            lat: this.props.long,
            lng: this.props.lat,
            title: this.props.name
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCfHElWY6iblnS-6RrlhaENB2ke-nF2QyQ'
})(GoogleMapPlaceCard);

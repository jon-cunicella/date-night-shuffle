import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '40%'
};

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      lat: this.props.lat,
      long: this.props.long,
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

  displayMarkers = () => {
    return (
      <Marker
        position={{
          lat: this.state.long,
          lng: this.state.lat,
          title: this.state.name
        }}
        onClick={() => {
          this.onMarkerClick();
        }}
      />
    );
  };

  displayPaper = () => {
    return <p>{this.state.name}</p>;
  };

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
      >
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClick={() => {
            this.onMapClick();
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCfHElWY6iblnS-6RrlhaENB2ke-nF2QyQ'
})(GoogleMap);

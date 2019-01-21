import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from './marker.png';
import { geolocated } from 'react-geolocated';
const AnyReactComponent = ({ text }) => (
  <div>
    <img src={marker} style={{ height: '50px', width: '50px' }} />
  </div>
);
export default class Map extends Component {
  static defaultProps = {
    zoom: 11,
  };

  Componentwillmount() {
    console.log(this.props.center.latitude);
  }
  render() {
    return (
      <div className="google-map" style={{ width: '100%', height: '2000px', backgroundColor: 'red' }}>
        <GoogleMapReact center={this.props.center} defaultZoom={this.props.zoom}>
        <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

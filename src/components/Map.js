import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from './marker.png';
import { geolocated } from 'react-geolocated';
const AnyReactComponent = ({ text }) => (
  <div>
    <img src={marker} style={{ height: '50px', width: '50px' }} />
  </div>
);



const ExampleMapStyles =
  [
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "saturation": 36
          },
          {
              "color": "#000000"
          },
          {
              "lightness": 40
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          },
          {
              "weight": 1.2
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 21
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 29
          },
          {
              "weight": 0.2
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 18
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 19
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          }
      ]
  }
];


export default class Map extends Component {
  static defaultProps = {
    zoom: 11,
    center: {
    lat: 49.955413,
    lng: 30.337844
  }
  };

  Componentwillmount() {
    console.log(this.props.center.latitude);
  }



  render() {
    return (
      <div className="google-map" style={{ width: '100%', height: '2000px', backgroundColor: 'red' }}>
        <GoogleMapReact
          options={{
            styles:ExampleMapStyles
        }}
         center={this.props.center} defaultZoom={this.props.zoom}>
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

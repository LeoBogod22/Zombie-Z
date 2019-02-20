import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from './marker.png';
import { geolocated } from 'react-geolocated';
// const AnyReactComponent = ({ text }) => (
//     <div>
//         <img src={marker} style={{ height: '50px', width: '40px' }} />
//     </div>
// );

const AnyReactComponent = (props) => {
    function setAddress(data) {
        var a = document.getElementById(data);
        if (a.style.display === 'none') {
            a.style.display = 'block'
        }
        else {
            a.style.display = 'none'
        }
    }
    return <div>

        <img className="markerHover" src={marker} onClick={() => { setAddress(props.id) }} style={{ height: '50px', width: '50px' }} />
        <br />
        <p style={{ display: 'none', color: '#4bbd4b', width: 400, fontSize: 20, fontWeight: 'bold', textAlign: 'justify', }} className="jan" id={props.id} >{props.place}</p>

    </div>
};

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
    state = {
        lati: 0,
        long: 0
    }
    //   compo() {
    //     console.log(this.props.center.latitude);
    //   }

    componentWillReceiveProps(nextProps) {

        this.setState({ lati: nextProps.center.lat, long: nextProps.center.lng }, () => { console.log("state", this.state) })


    }

    render() {
        return (
            <div className="google-map cust-map-setting">
                <GoogleMapReact
                    options={{
                        styles: ExampleMapStyles
                    }}
                    center={this.props.center} defaultZoom={this.props.zoom}>
                    {this.props.toShowMarker.length > 0 ?
                        this.props.toShowMarker.map((data, index) => {
                            return <AnyReactComponent key={index}
                                // lat: place.geometry.location.lat,
                                //  lng: place.geometry.location.lng
                                lat={data.lat}
                                lng={data.lng}
                                text={'Kreyser Avrora'}
                                id={index}
                                place={data.place}
                            />
                        }) : ''}

                </GoogleMapReact>
            </div>
        );
    }
}

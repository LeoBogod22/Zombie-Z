import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import App from '../App.js';

import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

import Nav from './nav.js';
// import Home from './Home.js';

class Tool extends Component {
  constructor() {
    super();
    this.state = {
      zoom: 13,
      maptype: 'roadmap',
      place_formatted: '',
      place_id: '',
      place_location: '',
      address: '',
      latitude: 37.774929,
      longitude: -122.419416,
      marker: [],
      places: [],
      isLoaded: false,
      info: '',
      vicinity: '',
      places2: [],
      isLoaded2: true,
    };

    this.getplace = this.getplace.bind(this);

    this.hello= this.hello.bind(this);
  }

  getplace() {
    this.setState({ isLoaded: true });

    this.props.showhealth();
  }

  hello(name , vicinity){
     this.setState({vicinity: vicinity});
   this.setState({info: name});
console.log(name);
console.log(this.state.info);
  }

  // run
  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  componentDidMount() {
    var param = {
      lat: this.props.latitude,
      long: this.props.longitude,
      temp: 1,
    };
    axios
      .post(`http://localhost:5000/search-champs`, {
        param,
      })
      .then(data => {
        console.log(this.state.places);
        console.log(data);

        const places = data.data.data[0].results.slice(0, 10).map(place => {
          console.log(place.name);
          console.log(place.geometry.location.lat);
          console.log(place.geometry.location.lng);

          let name = place.name;
          let vicinity = place.vicinity;

          return (
            <div class="col-xs-6 col-sm-6">
              <ul id="places-list">
                <li>
                  <a onClick={() => this.hello(name, vicinity)}> {place.name} </a>{' '}
                </li>

              </ul>
            </div>
          );
        });

        console.log('places', places);
        const places2 = data.data.data[1].results.slice(0, 10).map(place => {
          console.log(place.name);
          console.log(place.geometry.location.lat);
          console.log(place.geometry.location.lng);

          let name = place.name;
          let vicinity = place.vicinity;

          return (
            <div class="col-xs-6 col-sm-6">
              <ul id="places-list">
                <li>
                  <a onClick={() => this.hello(name, vicinity)}> {place.name} </a>{' '}
                </li>
              </ul>

            </div>
          );
        });

        this.setState({ places: places, isLoaded: true });

        this.setState({ places2: places2, isLoaded2: true });
      });
  }


  render() {
    return (
      <div>
        {/* <Home /> */}
        {/* <Nav /> */}

        {this.state.isLoaded ? (
          // <div id="location-basic-info">

          <div>
            {this.state.places} {' '}
<br></br>
             <h4> there were plenty of food sources nearby <br></br><br></br> but you could only carry 10 </h4>

                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
              <h3 id="name"> {this.state.info} </h3>

                 <br></br>
              <h3 id="address"> {this.state.vicinity} </h3>
          </div>
        ) : (


          // </div>
          <div>.</div>
        )}
      </div>
    );
  }
}

export default Tool;

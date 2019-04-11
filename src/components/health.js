import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlacesAutocomplete from 'react-places-autocomplete';

import App from '../App.js';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

class Health extends Component {
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
      places2: [],
      isLoaded2: true,
    };

    this.hello = this.hello.bind(this);
    this.getplace = this.getplace.bind(this);
  }

  getplace() {
    this.setState({ isLoaded: true });

    this.props.showhealth();
  }

  hello(name, vicinity) {
    this.setState({ vicinity: vicinity });
    this.setState({ info: name });
    console.log(name);
    console.log(this.state.info);
  }
  componentDidMount() {
    var param = {
      lat: this.props.latitude,
      long: this.props.longitude,
      temp: 1,
    };
    axios
      .post(`https://zombie-2019.herokuapp.com//search-champ2`, {
        param,
      })
      .then(data => {
        console.log("hello", this.state.places);
        console.log("server response",data);
        var datalist = [];
        const places = data.data.data[0].results.slice(0, 10).map(place => {
          console.log(place.name);
          console.log(place.geometry.location.lat);
          console.log(place.geometry.location.lng);
          datalist.push({ lat: place.geometry.location.lat, lng: place.geometry.location.lng })
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
   
        console.log('places', datalist);
        this.props.toShowMarkerFN(datalist);
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
            {this.state.places}{' '}
            <br></br>
            <p> there were plenty of health packs nearby but you could only carry 10 </p>
          </div>
        ) : (
            // </div>
            <div>.</div>
          )}
      </div>
    );
  }
}

export default Health;

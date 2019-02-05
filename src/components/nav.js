import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

import Health from './health.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Nav extends Component {
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
  }

  render() {
    return (
      <div classname="row">
      <ul class="nav nav-pills nav-fill" id="f">
          <li class="nav-item">
            <Link to="/">Location</Link>
          </li>
         <li class="nav-item">
            <Link to="/food">Food</Link>
          </li>
          <li class="nav-item">
            <Link to="/health">Health</Link>
          </li>
             <li class="nav-item">
            <Link to="/tool">Tools & Hardware</Link>
          </li>

          <li class="nav-item">
         <Link to="/transport">Transportation</Link>
       </li>
        </ul>
      </div>
    );
  }
}

export default Nav;

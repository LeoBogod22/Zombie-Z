import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import UserForm from './components/UserForm.js';

import Super from './components/super.js';
import marker from './components/marker.png';

import Home from './components/Home.js';
import Food from './components/food.js';
import Health from './components/health.js';

import Tool from './components/tools.js';
import MapContainer from './components/Map.js';
import Map from './components/Map.js';
import { classnames } from './components/helpers';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const AnyReactComponent = ({ text }) => (
  <div>
    <img src={marker} style={{ height: '50px', width: '50px' }} />
  </div>
);
const google = window.google;

class App extends Component {
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
      place: [],
      isLoaded2: false,
      places2: [],
      isLoaded: false,
      isLoaded3: false,
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route path="/health" component={Health} />
            <Route path="/food" component={Food} /> 
                 <Route path="/tool" component={Tool} /> */}
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

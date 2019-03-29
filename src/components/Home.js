import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import UserForm from './UserForm.js';
import { classnames } from './helpers';

import marker from './marker.png';

import Nav from './nav';
import Food from './food';

import Transport from './transport';
import Tool from './tools';
import Health from './health';
import MapContainer from './Map';
import Map from './Map';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const AnyReactComponent = ({ text }) => (
  <div>
    <img src={marker} style={{ height: '50px', width: '50px' }} />
  </div>
);
const google = window.google;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      zoom: 13,
      maptype: 'roadmap',
      place_formatted: '',
      place_id: '',
      place_location: '',
      address: '',
      value: '',
      survival: '',
      latitude: 37.774929,
      longitude: -122.419416,
      marker: [],
      place: [],
      isLoaded2: false,
      places2: [],
      isLoaded: false,
      isLoaded3: false,
      toShowMarker: [],
    };
  }
  toShowMarkerFN = (data) => {
    this.setState({ toShowMarker: data })
  }

  handleChange = address => {
    this.setState({
      address,
    });
    console.log(this.state.address);

    geocodeByAddress(address)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.setState({
          latitude: lat,
          longitude: lng,
        });
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log('error', error); // eslint-disable-line no-console
      });
  };

  hello(name, vicinity) {
    console.log(name);
  }

  handleSelect = address => {
    this.setState({
      address,
    });

    console.log(this.state.address);

    geocodeByAddress(address)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.setState({
          latitude: lat,
          longitude: lng,
          isGeocoding: false,
        });

        this.setState({ isLoaded: true });
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log('error', error); // eslint-disable-line no-console
      });

    console.log(this.state.latitude);
    console.log(this.state.longitude);

    var param = {
      lat: this.state.latitude,
      long: this.state.longitude,
      temp: 1,
    };
    axios
      .post(`http://localhost:5000/search-data`, {
        param,
      })
      .then(data => {
        console.log(data);

        console.log(data.data.data[0].statistics.population_density.value)

        this.setState({ value: data.data.data[0].statistics.population_density.value });

        this.setState({ survival: this.state.value/10*50});

      });

  };

  handleCloseClick = () => {
    this.setState({
      address: '',
      latitude: null,
      longitude: null,
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <a className="navbar-brand" href="#">
              Trailey
            </a>
          </header>

          <section className="fish">
            <div className="col-xl-9 mx-auto">
              <h1 id="mb-5">Search For Your place l</h1>
            </div>
            <PlacesAutocomplete
              onChange={this.handleChange}
              value={this.state.address}
              onSelect={this.handleSelect}
              onError={this.handleError}
              shouldFetchSuggestions={this.state.address.length > 0}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps }) => {
                return (
                  <div className="Demo__search-bar-container">
                    <div className="Demo__search-input-container">
                      <input
                        {...getInputProps({
                          placeholder: 'Search Places...',
                          className: 'Demo__search-input',
                        })}
                      />
                      {this.state.address.length > 0 && (
                        <button className="Demo__clear-button" onClick={this.handleCloseClick}>
                          x
                        </button>
                      )}
                    </div>
                    {suggestions.length > 0 && (
                      <div className="Demo__autocomplete-container">
                        {suggestions.map(suggestion => {
                          const className = classnames('Demo__suggestion-item', {
                            'Demo__suggestion-item--active': suggestion.active,
                          });

                          return (
                            /* eslint-disable react/jsx-key */
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                              })}
                            >
                              <strong>{suggestion.formattedSuggestion.mainText}</strong>{' '}
                              <small>{suggestion.formattedSuggestion.secondaryText}</small>
                            </div>
                          );
                        })}
                        <div className="Demo__dropdown-footer">
                          <div />
                        </div>
                      </div>
                    )}
                  </div>
                );
              }}
            </PlacesAutocomplete>
          </section>
           <div id="section">
            <div id="map" />
          </div>
        </div>

        <div id="h">
          <Map toShowMarker={this.state.toShowMarker} center={{ lat: this.state.latitude, lng: this.state.longitude }} />
          {/* <div id="location-basic-info" /> */}
          {this.state.isLoaded ? (
            <div id="location-basic-info">
              {window.location.pathname === '/' ? (
                <UserForm
                  address={this.state.address}
                  Latitude={this.state.latitude}
                  Longitude={this.state.longitude}
                  density={this.state.value}
                  survivial={this.state.survival}

                />
              ) : null}

              {window.location.pathname === '/health' ? (
                <Health style={{ display: 'none' }} toShowMarkerFN={this.toShowMarkerFN} latitude={this.state.latitude} longitude={this.state.longitude} />
              ) : null}

              {window.location.pathname === '/food' ? (
                <Food toShowMarkerFN={this.toShowMarkerFN} latitude={this.state.latitude} longitude={this.state.longitude} />
              ) : null}
              {window.location.pathname === '/tool' ? (
                <Tool toShowMarkerFN={this.toShowMarkerFN} latitude={this.state.latitude} longitude={this.state.longitude} />
              ) : null}
              {window.location.pathname === '/transport' ? (
                <Transport toShowMarkerFN={this.toShowMarkerFN} latitude={this.state.latitude} longitude={this.state.longitude} />
              ) : null}
              <Nav />
            </div>
          ) : (
              <div>.</div>
            )}
        </div>

        <div />
      </div>
    );
  }
}

export default Home;

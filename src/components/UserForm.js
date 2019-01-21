import React from 'react';

const UserForm = props => (
  <div>
    <div id="location-address">
      <strong>Address: </strong>
      <p> {props.address} </p>
    </div>
<br></br>
    <div id="location-latitude" style={{ display: 'block' }}>
      <strong>Latitude: </strong>
     <p>{props.Latitude}</p>
    </div>
    <br></br>
    
    
    <div id="location-longitude" style={{ display: 'block' }}>
      <strong>Longitude: </strong>
      <p>{props.Longitude}</p>
    </div>

    <br></br>
 
        <div id="location-longitude" style={{ display: 'block' }}>
      <strong>population density: </strong>
     <p> {props.density} </p>
    </div>

    <br></br>
     <div id="location-longitude" style={{ display: 'block' }}>
      <strong>description: </strong>
      <p> The number of inhabitants per square kilometer around this point </p>
    </div>
  </div>
);

export default UserForm;

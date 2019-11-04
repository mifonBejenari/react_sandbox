import React from 'react';

const Expand = () => {
  console.log('expanded')
};

const Contacts = props => {
  const {
    city,
    street,
    suite,
    zipcode,
    geo,
  } = props;

  return (
    <div>
      <h4 onClick={Expand}>Contacts:</h4>
      <div>City: {city}</div>
      <div>Street: {street}</div>
      <div>Suite: {suite}</div>
      <div>ZIP: {zipcode}</div>
      <div>Geo:
        <ul>
          <li>Lat: {geo.lat}</li>
          <li>Lng: {geo.lng}</li>
        </ul>
      </div>
    </div>
  )
};

export default Contacts;
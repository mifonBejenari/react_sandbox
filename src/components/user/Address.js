import React from 'react';

const User = props => {
  console.log(props);

  return (
    <>
      address:
      <div>City: {props.city}</div>
      <div>Street: {props.street}</div>
      <div>Suite: {props.suite}</div>
      <div>ZIP: {props.zipcode}</div>
      <div>Geo:
        <div>{props.geo.lat}</div>
        <div>{props.geo.lng}</div>
      </div>
    </>
  )
};

export default User;
import React from 'react';

const Company = (props) => {
  const {
    name,
    catchPhrase,
    bs,
  } = props;

  return (
    <>
      <h4>Company:</h4>
      <div>Name: {name}</div>
      <div>Catch Phrase: {catchPhrase}</div>
      <div>BS: {bs}</div>
    </>
  )
};

export default Company;

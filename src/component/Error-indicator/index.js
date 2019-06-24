import React from 'react';
import iconError from './error.png';

import './error-indicator.css';

const ErrorIndicator = () => {

  return (
    <div className='error-indicator'>
      <img src={iconError} alt="iconError"/>
      <h2>Error!</h2>
      <p>Our specialists have already begun to solve it!</p>
    </div>
  )
}

export default ErrorIndicator;
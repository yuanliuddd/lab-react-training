import React from 'react'
import Rating from './Rating';

const DriverCard = ({name,rating,img,car}) => {
  return (
    <div>
      <img src={img} alt="profile" style={{width:'8rem'}} />
      <h1>{name}</h1>
      <Rating>{rating}</Rating>
      <span>{`${car.model}-${car.licensePlate}`}</span>
    </div>
  );
}

export default DriverCard; 
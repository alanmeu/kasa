import React from 'react';
import starfull from "/Users/alan/Desktop/kasa/src/Assets/Images/star-active.png"
import starempty from "/Users/alan/Desktop/kasa/src/Assets/Images/star-inactive.png"
import "/Users/alan/Desktop/kasa/src/style/logement/host.css"


const Note = ({ rating }) => {


  const generateStars = () => {
    const roundedRating = Math.round(rating);

    return Array.from({ length: 5 }, (_, index) => (
      <img className='star'
        key={index}
        src={index  < roundedRating ? starfull : starempty}
        alt={`Star ${index + 1}`}
      />
    ));
  };

  return <div>{generateStars()}</div>;
};

export default Note;
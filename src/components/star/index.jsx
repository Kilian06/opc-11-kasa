import React from 'react';
import starFill from '../../assets/starfill.svg'
import'../../styles/ratingStar.css'

function RatingStar(rating) {
    var numberStar = []
    const noteRating = rating.rating
    for (let i = 0; i < noteRating; i++) {
        numberStar.push(<img className='ratingStar' key={i} src={starFill} alt="rating star" />);
      }
    return (
        <div>
            {numberStar}
        </div>
    );
}

export default RatingStar;
import React from 'react';
import { Link } from 'react-router-dom';

function CardHebergement(lien) {
    const hebergement = lien.lien
    return (
<li className="cardHebergement" key={hebergement.id}>
                        <Link to={`detail/${hebergement.id}`}>
                        <img className='cardHebergementCover' src={hebergement.cover} alt="" />
                        <div className='cardHebergementBg'></div>
                        <p className='cardHebergementText'>{hebergement.title}</p>
                        </ Link>
                        </li>
    );
}

export default CardHebergement;
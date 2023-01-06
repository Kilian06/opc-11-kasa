import React from 'react';
import taglinehomeimg from '../../assets/taglinehomeimg.png'
import '../../styles/home.css'
import '../../styles/homemobile.css'
import loadFiles from '../../datas/data';
import '../../styles/cardhebergement.css'
import '../../styles/cardhebergementmobile.css'
import { Link } from 'react-router-dom';



function Home(props) {
    return (
        <div className='homestyle'>
            <div className='homeTagline'>
                <img className="homeTaglineImg" src={taglinehomeimg} alt="Logo" />
                <div className='homeTaglineBg'>
                </div>
                <p className='homeTaglineText'>Chez vous, partout et ailleurs</p>

                
            </div>
            <ul className="homeGallery">
                {loadFiles.map((hebergement) => (
                    <li className="cardHebergement" key={hebergement.id}>
                        <Link to={`detail/${hebergement.id}`}>
                        <img className='cardHebergementCover' src={hebergement.cover} alt="" />
                        <div className='cardHebergementBg'></div>
                        <p className='cardHebergementText'>{hebergement.title}</p>
                        </ Link>
                        </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
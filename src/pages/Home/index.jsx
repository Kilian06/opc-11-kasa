import React from 'react';
import taglinehomeimg from '../../assets/taglinehomeimg.png'
import '../../styles/home.css'
import '../../styles/homemobile.css'
import loadFiles from '../../datas/data';
import '../../styles/cardhebergement.css'
import '../../styles/cardhebergementmobile.css'
import { Link } from 'react-router-dom';
import CardHebergement from '../../components/cardHebergement';



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
                    <CardHebergement lien = {hebergement} />
                ))}
            </ul>
        </div>
    );
}

export default Home;
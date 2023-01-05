import React from 'react';
import AboutTopImg from '../../assets/aboutimg.png'
import '../../styles/about.css'
import '../../styles/aboutmobile.css'
import Accordion from '../../components/accordion';
import { fiabilite, respect, service, securite } from '../../datas/dataAbout';




function About(props) {
    return (
        <div className="aboutStyle">
            <img className="aboutTopImg" src={AboutTopImg} alt="Logo" />
            <div className='aboutTopBg'></div>
            <Accordion title="Fiablité" content={fiabilite}/>
            <Accordion title="Respect" content={respect}/>
            <Accordion title="Service" content={service}/>
            <Accordion title="Sécurité" content={securite}/>
        </div>
    );
}

export default About;
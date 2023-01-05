import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/erreur.css'

function Erreur(props) {
    return (
        <div className='erreurstyle'>
            <p className='erreurStyle404'>404</p>
            <p className='erreurStyleText'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='erreurStyleLink'to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default Erreur;
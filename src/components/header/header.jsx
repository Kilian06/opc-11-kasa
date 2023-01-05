import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import '../../styles/header.css'
import '../../styles/headermobile.css'

function Header(props) {
    return (
        <div className='headerstyle'>
            <img className="headerLogo" src={logo} alt="Logo" />
            <nav className='headerNavMenu'>
                <NavLink to="/"className="headerNavMenuItem">Accueil</NavLink>
                <NavLink to="/about"className="headerNavMenuItem">A propos</NavLink>
            </nav>
        </div>
    );
}

export default Header;
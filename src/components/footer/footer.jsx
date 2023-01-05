import React from 'react';
import logo from '../../assets/logo.png'
import '../../styles/footer.css'


function Footer(props) {
    return (
        <div className='footerstyle'>
            <img className="footerLogo" src={logo} alt="Logo" />
            <p className='footerCopyright'>
            © 2020 Kasa. All rights reserved
            </p>
        </div>
    );
}

export default Footer;
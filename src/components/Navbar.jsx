import React from 'react';
import logo from '../images/logo1.svg';
import "./styles/Navbar.css";

class BadgeNew extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div>
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src={logo} alt="logo conf" />
                        <span className="font-weight-ligth">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>                
            </div>
        );
    }
}

export default BadgeNew;

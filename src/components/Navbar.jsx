import React from 'react';
import logo from '../images/logo1.svg';
import styled from 'styled-components';
/*
import "./styles/Navbar.css";
class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar" >
                <div className="container-fluid">
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
*/

const Navbar = () => {
    return (
        <NavbarContent>
            <NavbarBrandContent>
                <NavbarBrand href="/">
                    <NavbarBrandLogo src={logo} alt="logo conf" />
                    <NavbarBrandPlatzi>Platzi</NavbarBrandPlatzi>
                    <NavbarBrandConf>Conf</NavbarBrandConf>
                </NavbarBrand>
            </NavbarBrandContent>                
        </NavbarContent>
    );
}


const NavbarContent = styled.div`
    width: 100%;
    padding: 0.5rem 0;
    background-color: #1C3643;
`;

const NavbarBrandContent = styled.div`
    padding: 0 10px;
`;

const NavbarBrand = styled.a`
    color: #ffffff;
    display: flex;
    align-items: center;

    &:hover {
        color: #ffffff;
        text-decoration: none;
    }
`;

const NavbarBrandLogo = styled.img`
    margin-right: 0.5rem;
`;

const NavbarBrandPlatzi = styled.span`
    font-weight: lighter;
`;

const NavbarBrandConf = styled.span`
    font-weight: bold;
`;

export default Navbar;

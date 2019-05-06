import React from 'react';
import Navbar from '../components/Navbar';
import conflogo from '../images/logo.svg';
import Badge from '../components/Badge';
import styled from 'styled-components';
import BackgroundHero from '../images/stars.svg';
import BadgeForm from '../components/BadgeForm';

/*
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={conflogo} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Carlos"
                                lastName="Pérez"
                                jobTitle="FrontEnd Enginner"
                                twitter="dragmon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
*/

const BadgeNew = () => {
    return (
        <div>
            <Navbar />
            <BadgeNewHeros>
                <BadgeNewHerosImg src={conflogo} alt="Logo" />
            </BadgeNewHeros>
            <BadgeConteiner>
                <div>
                    <Badge
                        firstName="Carlos"
                        lastName="Pérez"
                        jobTitle="FrontEnd Enginner"
                        twitter="dragmon"
                    />
                </div>
                <div>
                    <BadgeForm/>
                </div>
            </BadgeConteiner>
        </div>
    );
};

const BadgeNewHeros = styled.div`
    width: 100%;
    padding: 2rem 0;
    background: url(${BackgroundHero}), #1B1B25;
    background-repeat: repeat;
    margin-bottom: 1rem;
    color: #ffffff;
`;

const BadgeNewHerosImg = styled.img``;

const BadgeConteiner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export default BadgeNew;
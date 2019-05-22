import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/platziconf-logo.svg';
import images from '../images/astronauts.svg';
import backgroundHome from '../images/stars.svg';

class Home extends React.Component{
    render(){
        return(
            <BadgesHome>
                <HomeContainer>
                    <HomeLogo>
                        <img src={logo} alt="logo" />
                        <HomeH1>Badge Management System</HomeH1>
                    </HomeLogo>
                    <HomeImages>
                        <img src={images} alt="astronauts" />
                    </HomeImages>
                </HomeContainer>                
            </BadgesHome>
        );
    }
};

const BadgesHome = styled.div`
    background: url(${backgroundHome}), #1B1B25;
    height: 100vh;
`;

const HomeContainer = styled.div`
    padding: 150px 0;
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

const HomeLogo = styled.div`
    text-align: center;
`;

const HomeImages = styled.div``;

const HomeH1 = styled.h1`
    color: #FFF;
    font-size: 3.5em;
`;

export default Home;
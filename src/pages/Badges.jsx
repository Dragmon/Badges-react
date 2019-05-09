import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';
import confLogo from '../images/logo.svg';
import BackgroundHeader from '../images/stars.svg';
import './styles/Badges.css';

const api = require('../api/list.json');
//console.log('api : ', api);

class Badges extends React.Component{
    render(){
        this.state = {
            data : api
        };
        console.log('state : ', this.state);
        return(
            <div>
                <Navbar />
                <BadgesHeader>
                    <BadgesHero>
                        <BadgesContainer className="ContainerLogo">
                            <BadgesImgLogo
                                src={confLogo}
                                alt="Conf logo"
                            />
                        </BadgesContainer>
                    </BadgesHero>
                </BadgesHeader>
                <BadgesContainer>
                    <BadgeButton>
                        <BadgeLinkButton href="/badges/new">
                            New Badge
                        </BadgeLinkButton>
                    </BadgeButton>
                </BadgesContainer>
                <div className="Badges__list">
                    <BadgesContainerList>
                        <BadgesList badges={this.state.data}/>
                    </BadgesContainerList>
                </div>
            </div>
        )
    }
}

const BadgesHeader = styled.div``;

const BadgesHero = styled.div`
    width: 100%;
    padding: 2rem 0;
    background: url(${BackgroundHeader}), #1B1B25;
    background-repeat: repeat;
    margin-bottom: 1rem;

    .ContainerLogo{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const BadgesContainer = styled.div`
    width: 100%;
    max-width: 580px;
    margin: 0 auto;
    padding: 1rem;
`;

const BadgesContainerList = styled(BadgesContainer)`
    background: #f5f5f5;
`;

const BadgesImgLogo = styled.img`
    margin-bottom: 2rem;
    width: 90%;
`;

const BadgeButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
`;

const BadgeLinkButton = styled.a`
    background: #97ca3f;
    padding: 10px 30px;
    border-radius: 10px;
    color: #FFF;
    text-decoration: none;
`;

export default Badges;
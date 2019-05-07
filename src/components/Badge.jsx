import React from 'react';
import conflogo from '../images/logo.svg';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
/*
import './styles/Badge.css';

class Badge extends React.Component{
    render(){
        return <h1>Badge !!!!</h1>
    }
}

class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={conflogo} alt="logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                    <h1>Carlos <br/> Pérez</h1>
                </div>

                <div className="Badge__section-info">
                    <p>Frontend Engineer</p>
                    <p>@dragmon</p>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        );
    }
};
*/

const Badge = ({ firstName, lastName, jobTitle, twitter}) => {
    return (
        <BadgeConteiner>
            <GlobalStyle/>
            <BadgeHeader>
                <img src={conflogo} alt="logo de la conferencia" />
            </BadgeHeader>

            <BadgeSectionName>
                <BadgeAvatar src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                <h1>{firstName} <br /> {lastName}</h1>
            </BadgeSectionName>

            <BadgeSectionInfo>
                <p>{jobTitle}</p>
                <p>{twitter}</p>
            </BadgeSectionInfo>

            <BadgeFooter>
                #platziconf
            </BadgeFooter>
        </BadgeConteiner>
    );
};

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Nunito', sans-serif;
    }
`;

const BadgeConteiner = styled.div`
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.10);
    border-radius: 8px 8px 8px 8px;
    overflow: hidden;
    height: 380px;
    margin: 0 30px;
`;

const BadgeHeader = styled.div`
    padding: 0.5rem 0;
    height: 80px;
    background: #1B1B25;
    display: flex;
    justify-content: center;
`;

const BadgeSectionName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
`;

const BadgeAvatar = styled.img`
    border-radius: 50%;
    margin-right: 1rem;
    width: 120px;
    height: 120px;
`;

const BadgeSectionInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    background: #F4F4F7;
`;

const BadgeFooter = styled.div`
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #98CA3F;
    font-weight: bold;
    font-style: italic;
`;

export default Badge;
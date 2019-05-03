import React from 'react';
import conflogo from '../images/logo.svg';
import './styles/Badge.css';

/*
class Badge extends React.Component{
    render(){
        return <h1>Badge !!!!</h1>
    }
}
*/

const Badge = () => {
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
};

export default Badge;
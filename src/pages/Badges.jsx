import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import confLogo from '../images/logo.svg';
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

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img 
                                className="Badges_conf-logo"
                                src={confLogo}
                                alt="Conf logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <a href="/badges/new">
                            New Badge
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Badges;
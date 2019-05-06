import React from 'react';
import Navbar from '../components/Navbar';
import conflogo from '../images/logo.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';



class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={conflogo} alt="Logo"/>
                </div>

                <div>
                    <div>
                        <div>
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

export default BadgeNew;
import React from 'react';
import Navbar from '../components/Navbar';
import conflogo from '../images/logo.svg';
import Badge from '../components/Badge';
import styled from 'styled-components';
import BackgroundHero from '../images/stars.svg';
import BadgeForm from '../components/BadgeForm';

/*
import './styles/BadgeNew.css';
*/

class BadgeNew extends React.Component{

    state = { 
        form:{
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render(){
        return(
            <div>
                <Navbar />
                <BadgeNewHeros>
                    <BadgeNewHerosImg src={conflogo} alt="Logo" />
                </BadgeNewHeros>
                <BadgeConteiner>

                    <Badge
                        firstName={this.state.form.firstName}
                        lastName={this.state.form.lastName}
                        twitter={this.state.form.twitter}
                        jobTitle={this.state.form.jobTitle}
                        email={this.state.form.email}
                        avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                    />

                    <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>

                </BadgeConteiner>
            </div>
        );
    }
}


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
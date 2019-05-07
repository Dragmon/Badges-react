import React from 'react';
import styled from 'styled-components';

class BadgeForm extends React.Component{
    /*
    state = {
        firstName: '',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    };
    
    handleChange = (e) => {
        
        console.log({
            name: e.target.name,
            value: e.target.value,
        });

        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    */

    handleClick = (e) => {
        console.log('Button was clicked');
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form was submit');
    };
    render(){        
        return(
            <BadgeFormContainer>
                <BadgeFormTitle>New Attendant</BadgeFormTitle>
                <form onSubmit={this.handleSubmit}>
                    <BadgeFormContInput>
                        <label>First Name</label>
                        <BadgeFormInput
                            onChange={this.props.onChange}
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName}
                        />
                    </BadgeFormContInput>
                    <BadgeFormContInput>
                        <label>Last Name</label>
                        <BadgeFormInput
                            onChange={this.props.onChange}
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                    </BadgeFormContInput>
                    <BadgeFormContInput>
                        <label>Email</label>
                        <BadgeFormInput
                            onChange={this.props.onChange}
                            type="text"
                            name="email"
                            value={this.props.formValues.email}
                        />
                    </BadgeFormContInput>
                    <BadgeFormContInput>
                        <label>Job Title</label>
                        <BadgeFormInput
                            onChange={this.props.onChange}
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                    </BadgeFormContInput>
                    <BadgeFormContInput>
                        <label>Twitter</label>
                        <BadgeFormInput
                            onChange={this.props.onChange}
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter}
                        />
                    </BadgeFormContInput>
                    <BadgeFormButton onClick={this.handleClick}> Save </BadgeFormButton>
                </form>
            </BadgeFormContainer>
        );
    }
}

const BadgeFormContainer = styled.div`
    background: #f4f4f7;
    border-radius: 8px 8px 8px 8px;
    margin: 0 30px;
    padding: 0 50px 30px;
`;

const BadgeFormTitle = styled.h1`
    font-size: 2.5em;
`;

const BadgeFormContInput = styled.div`
    margin: 15px 0;
`;

const BadgeFormInput = styled.input`
    width: 100%;
    border: 2px solid #bbbaba;
    font-size: 18px;
    border-radius: 5px;
`;

const BadgeFormButton = styled.button`
    background: #97ca3f;
    width: 100%;
    max-width: 100px;
    font-size: 20px;
    border-radius: 5px;
    padding: 8px;
`;
export default BadgeForm;
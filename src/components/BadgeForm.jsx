import React from 'react';

const handleChange = (e) => {
    /*
    console.log({
        name: e.target.name,
        value: e.target.value,
    });
    */
    this.setState({
        firstName: e.target.value,
    });
};

const handleClick = (e) => {
    console.log('Button was clicked');
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submit');
};

const BadgeForm = () =>{
    return(
        <div>
            <h1>New Attendant</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                    />
                </div>
                <button
                    onClick={handleClick}
                >Save</button>
            </form>
        </div>
    );
}

export default BadgeForm;
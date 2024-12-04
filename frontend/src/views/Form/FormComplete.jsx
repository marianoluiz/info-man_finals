import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/form.scss';

const FormComplete = () => {
    return (
        <div className="form container">
            <h1>Form Complete</h1>
            <p>Thank you for submitting the form!</p>
            <NavLink to="/">Home</NavLink>
        </div>
    );
};

export default FormComplete;

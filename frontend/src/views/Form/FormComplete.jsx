import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/form.scss';

const FormComplete = () => {
    return (
        <div className="form container">
            <h1 className="fs-1 text-center mt-5">
                Your Response Have Been Submitted!
            </h1>
            <p className="fs-6 text-center">
                For concerns and queries, please contact the administrator.
            </p>

            <div className="d-flex justify-content-center mt-4">
                <NavLink
                    className="btn btn-primary form__navbtn text-center"
                    to="/"
                >
                    {' '}
                    Back to Home
                </NavLink>
            </div>
        </div>
    );
};

export default FormComplete;

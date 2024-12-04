import React from 'react';
import PropTypes from 'prop-types';
import '../styles/FormStepper.scss';

const FormStepper = ({ formPages, currentPage, onPageClick }) => {
    return (
        <div className="stepper container">
            {formPages.map((pageStep, index) => (
                <div
                    key={index}
                    className={`stepper__item ${index === currentPage ? 'active' : ''}`}
                    onClick={() => onPageClick(index)}
                    // this onclick puts up the index + 1 to the current page
                >
                    {pageStep}
                </div>
            ))}
            <div className=" stepper__line"></div>
        </div>
    );
};

// required maker?
FormStepper.propTypes = {
    formPages: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageClick: PropTypes.func.isRequired,
};

export default FormStepper;

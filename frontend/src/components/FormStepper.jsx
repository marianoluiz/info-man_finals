import React from 'react';
import PropTypes from 'prop-types';
import '../styles/formStepper.scss';

const FormStepper = ({ formPages, currentPage, onPageClick }) => {
  return (
    <div className="stepper container">
      {formPages.map((page, index) => (
        <div
          key={index}
          className={`stepper-item ${index === currentPage ? 'active' : ''}`}
          onClick={() => onPageClick(index)}
          // this onclick puts up the index + 1 to the current page
        >
          {page}
        </div>
      ))}
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

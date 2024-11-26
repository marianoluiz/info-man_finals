import React from 'react';
import PropTypes from 'prop-types';
import '../styles/FormStepper.scss';

const FormStepper = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`stepper-item ${index === currentStep ? 'active' : ''}`}
          onClick={() => onStepClick(index)}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

FormStepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  onStepClick: PropTypes.func.isRequired,
};

export default FormStepper;
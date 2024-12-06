import PropTypes from 'prop-types';
import '../styles/FormStepper.scss';

/* these props are from MultiPageForm */
const FormStepper = ({ formPages, currentPage, disabled, onPageClick }) => {
    return (
        <div className="stepper container">
            {formPages.map((pageStep, index) => (
                <button
                    key={index}
                    className={`stepper__item ${index === currentPage ? 'active' : ''}`}
                    // this onclick puts up the index + 1 to the current page
                >
                    {/* If on Completion page, dont render pageSteps Array*/}
                    {disabled ? '' : pageStep}
                </button>
            ))}
            {/* add pt-5 if disabled */}
            <div className={`stepper__line ${disabled ? 'pt-5' : ''}`}></div>
        </div>
    );
};

// required maker?
FormStepper.propTypes = {
    formPages: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default FormStepper;

import PropTypes from 'prop-types';
import '../styles/FormStepper.scss';

/* these props are from MultiPageForm */
const FormStepper = ({ formPages, currentPage, disabled }) => {
    return (
        <div className="stepper container">
            {formPages.map((pageStep, index) => (
                <div
                    key={index}
                    className={`stepper__item ${index === currentPage ? 'active' : ''}`}

                    // this onclick puts up the index + 1 to the current page
                >
                    {/* If on Completion page, dont render pageSteps Array*/}
                    {disabled ? '' : pageStep}
                </div>
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
    disabled: PropTypes.bool.isRequired,
};

export default FormStepper;

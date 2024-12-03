import React from 'react';
import '../../styles/form.scss';

const FormPage3 = ({ nextPage }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        nextPage();
    };

    return (
        <div className="form container">
            <h1>Form Page 3</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormPage3;

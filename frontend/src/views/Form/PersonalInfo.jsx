import React from 'react';
import '../../styles/form.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const FormPage1 = ({ nextPage }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        //validation here
        nextPage();
    };

    const [showOthersCivil, setShowOthersCivil] = useState(false);
    const [showOthersCitizenship, setShowOthersCitizenship] = useState(false);

    // all rows that has sub__label don't need mb-4 since they are already big enough to have space
    // i added mb-4 instead for those rows

    return (
        <div className="form container">
            <p className="form__disclaimer">*Required Fields</p>
            <form onSubmit={handleSubmit} className="row">
                {/* Surname */}
                <div className="row mb-4">
                    <label htmlFor="surname" className="col-sm-3">
                        Last Name*
                        <p className="form__sub-label">(ex. Dela Cruz)</p>
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="surname"
                            name="surname"
                            placeholder="Enter your last name"
                            pattern="[A-Za-z\s]+"
                            title="Please enter a valid last name"
                            required
                        />
                    </div>
                </div>

                {/* Firstname */}
                <div className="row mb-4">
                    <label htmlFor="firstname" className="col-sm-3">
                        First Name*
                        <p className="form__sub-label">(ex. Juan)</p>
                    </label>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            placeholder="Enter your first name"
                            pattern="[A-Za-z\s]+"
                            title="Please enter a valid first name"
                            required
                        />
                    </div>

                    {/*Extension Name*/}
                    <label htmlFor="extension_name" className="col-sm-2">
                        Extension Name
                        <p className="form__sub-label">(ex. Jr./Sr.)</p>
                    </label>
                    <div className="col-sm-3">
                        <input
                            type="text"
                            className="form-control"
                            id="extension_name"
                            name="extension_name"
                            placeholder="Enter your first name"
                            pattern="^[A-Za-z\s.]+$"
                            title="Please enter a valid extension name"
                            required
                        />
                    </div>
                </div>

                {/* Middlename */}
                <div className="mb-4 row">
                    <label
                        htmlFor="middlename"
                        className="col-sm-3 col-form-label"
                    >
                        Middle Name
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="middlename"
                            name="middlename"
                            placeholder="Enter your middle name"
                            pattern="[A-Za-z\s]*"
                            title="Please enter a valid middle name"
                        />
                    </div>
                </div>

                {/* Date of Birth */}
                <div className="mb-4 row">
                    <label htmlFor="dob" className="col-sm-3 col-form-label">
                        Date of Birth*
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="date"
                            className="form-control"
                            id="dob"
                            name="dob"
                            required
                        />
                    </div>
                </div>

                {/* Place of Birth */}
                <div className="mb-4 row">
                    <label htmlFor="pob" className="col-sm-3 col-form-label">
                        Place of Birth*
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="pob"
                            name="pob"
                            placeholder="Enter your place of birth"
                            pattern="[A-Za-z\s]+"
                            title="Please enter a valid place of birth"
                            required
                        />
                    </div>
                </div>

                {/* Sex */}
                <div className="mb-4 row">
                    <label htmlFor="sex" className="col-sm-3 col-form-label">
                        Sex*
                    </label>
                    <div className="col-sm-9">
                        <select
                            className="form-select"
                            id="sex"
                            name="sex"
                            required
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>

                {/* Civil Status */}
                <div className="mb-4 row">
                    <label
                        htmlFor="civil_status"
                        className="col-sm-3 col-form-label"
                    >
                        Civil Status*
                    </label>
                    <div className="col-sm-9">
                        <select
                            className="form-select"
                            id="civil_status"
                            name="civil_status"
                            required
                            onChange={(e) =>
                                setShowOthersCivil(e.target.value === 'others')
                            }
                        >
                            <option value="">Select</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="widowed">Widowed</option>
                            <option value="divorced">Divorced</option>
                            <option value="others">Others</option>
                        </select>
                        {showOthersCivil && (
                            <input
                                type="text"
                                className="form-control mt-4"
                                id="civil_status_other"
                                placeholder="Please Specify*"
                                required
                            />
                        )}
                    </div>
                </div>

                {/* Height */}
                <div className="mb-4 row">
                    <label htmlFor="height" className="col-sm-3 col-form-label">
                        Height (cm)
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="number"
                            className="form-control"
                            id="height"
                            name="height"
                            min="0"
                            placeholder="Enter your height in cm"
                            required
                        />
                    </div>
                </div>

                {/* Weight */}
                <div className="mb-4 row">
                    <label htmlFor="weight" className="col-sm-3 col-form-label">
                        Weight (kg)
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="number"
                            className="form-control"
                            id="weight"
                            name="weight"
                            min="0"
                            placeholder="Enter your weight in kg"
                            required
                        />
                    </div>
                </div>

                {/* Blood Type */}
                <div className="mb-4 row">
                    <label
                        htmlFor="blood_type"
                        className="col-sm-3 col-form-label"
                    >
                        Blood Type
                    </label>
                    <div className="col-sm-9">
                        <select
                            className="form-select"
                            id="blood_type"
                            name="blood_type"
                        >
                            <option value="">Select</option>
                            <option value="a+">A+</option>
                            <option value="a-">A-</option>
                            <option value="b+">B+</option>
                            <option value="b-">B-</option>
                            <option value="ab+">AB+</option>
                            <option value="ab-">AB-</option>
                            <option value="o+">O+</option>
                            <option value="o-">O-</option>
                        </select>
                    </div>
                </div>

                {/* GSIS */}
                <div className="mb-4 row">
                    <label
                        htmlFor="gsis_no"
                        className="col-sm-3 col-form-label"
                    >
                        GSIS No.
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="gsis_no"
                            name="gsis_no"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="Enter your GSIS number"
                        />
                    </div>
                </div>

                {/* Pag Ibig */}
                <div className="mb-4 row">
                    <label
                        htmlFor="pagibig_no"
                        className="col-sm-3 col-form-label"
                    >
                        Pag-IBIG No.
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="pagibig_no"
                            name="pagibig_no"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="Enter your Pag-IBIG number"
                        />
                    </div>
                </div>

                {/* PhilHealth */}
                <div className="mb-4 row">
                    <label
                        htmlFor="philhealth_no"
                        className="col-sm-3 col-form-label"
                    >
                        PhilHealth No.
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="philhealth_no"
                            name="philhealth_no"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="Enter your PhilHealth number"
                        />
                    </div>
                </div>

                {/* SSS */}
                <div className="mb-4 row">
                    <label htmlFor="sss_no" className="col-sm-3 col-form-label">
                        SSS No.
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="sss_no"
                            name="sss_no"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="Enter your SSS number"
                        />
                    </div>
                </div>

                {/* Tin */}
                <div className="mb-4 row">
                    <label htmlFor="tin_no" className="col-sm-3 col-form-label">
                        TIN No.
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="tin_no"
                            name="tin_no"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="Enter your TIN number"
                        />
                    </div>
                </div>

                {/* Agency Employee Number */}
                <div className="mb-4 row">
                    <label
                        htmlFor="agency_employee_no"
                        className="col-sm-3 col-form-label"
                    >
                        Agency Employee No.
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="agency_employee_no"
                            name="agency_employee_no"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="Enter your agency employee number"
                        />
                    </div>
                </div>

                {/* Citizenship */}
                <div className="mb-4 row">
                    <label
                        htmlFor="citizenship"
                        className="col-sm-3 col-form-label"
                    >
                        Citizenship *
                    </label>
                    <div className="col-sm-9">
                        <select
                            className="form-select"
                            id="citizenship"
                            name="citizenship"
                            required
                            onChange={(e) =>
                                setShowOthersCitizenship(
                                    e.target.value === 'others',
                                )
                            }
                        >
                            <option value="">Select</option>
                            <option value="filipino">Filipino</option>
                            <option value="others">Dual Citizenship</option>
                        </select>

                        {showOthersCitizenship && (
                            <div className="row  mt-4">
                                {/* Radio */}
                                <div className="form__citizenship-radio d-flex col-sm-4">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="citizenship__radio"
                                            id="by-birth"
                                            required
                                        />
                                        <label
                                            className="form-check-label"
                                            for="by-birth"
                                        >
                                            By Birth
                                        </label>
                                    </div>

                                    <div className="form-check mx-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="citizenship__radio"
                                            id="by-naturalization"
                                            required
                                        />
                                        <label
                                            className="form-check-label"
                                            for="by-naturalization"
                                        >
                                            By Naturalization
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-8 form__citizenship-country">
                                    <input
                                        type="text"
                                        className="form-control flex-grow-1"
                                        id="dual_citizenship_country"
                                        name="dual_citizenship_country"
                                        placeholder="Please Specify Country*"
                                        required
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Residential Address */}
                <div className="mb-4 row">
                    <label
                        htmlFor="residential_address"
                        className="col-sm-3 col-form-label"
                    >
                        Residential Address *
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="residential_address"
                            name="residential_address"
                            placeholder="Enter your residential address"
                            required
                        />
                    </div>
                </div>

                {/* Telephone Number */}
                <div className="mb-4 row">
                    <label
                        htmlFor="telephone_no"
                        className="col-sm-3 col-form-label"
                    >
                        Telephone No.
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="tel"
                            className="form-control"
                            id="telephone_no"
                            name="telephone_no"
                            placeholder="Enter your telephone number"
                        />
                    </div>
                </div>

                {/* Mobile Number */}
                <div className="mb-4 row">
                    <label
                        htmlFor="mobile_no"
                        className="col-sm-3 col-form-label"
                    >
                        Mobile No. *
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="tel"
                            className="form-control"
                            id="mobile_no"
                            name="mobile_no"
                            required
                            inputMode="numeric"
                            pattern="[0-9 ]*"
                            placeholder="Enter your mobile number"
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div className="row mb-4">
                    <label htmlFor="email" className="col-sm-3 col-form-label">
                        Email Address *
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                </div>

                <hr className="form__line mb-4" />

                {/* Navigate */}
                <div className="d-flex justify-content-between mb-4">
                    {/* Back Button */}
                    <div>
                        <NavLink to="/" className="btn btn-danger">
                            Back
                        </NavLink>
                    </div>

                    {/* Next Button */}
                    <div>
                        <button
                            type="submit"
                            className="form__navbtn btn btn-primary"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormPage1;

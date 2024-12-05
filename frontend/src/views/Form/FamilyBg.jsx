import React from 'react';
import '../../styles/form.scss';
import { useState } from 'react';

const FormPage2 = ({ nextPage, prevPage }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        nextPage();
    };

    const [formData, setFormData] = useState({
        spouse_lastname: '',
        spouse_firstname: '',
        children: [
            {
                id: `child_fullname_1`,
                child_fullname: '',
                dob: '',
            },
        ],
    });

    // Adding More a Child Section
    const addChild = (index) => {
        const newIndex = formData.children.length + 1;

        setFormData({
            ...formData,
            children: [
                ...formData.children,
                {
                    id: `child_fullname_${newIndex}`,
                    child_fullname: '',
                    dob: '',
                },
            ],
        });
    };

    // Removing a Child Section
    const removeChild = () => {
        if (formData.children.length === 1) return;

        const newChildren = formData.children.filter(
            (_, i) => i !== formData.children.length - 1,
        );
        setFormData({
            ...formData,
            children: newChildren,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Dynamic key, we use [].
        });
    };

    const handleChildInputChange = (e, index) => {
        const { name, value } = e.target;
        // name should be  the child_fullname

        setFormData({
            ...formData,
            children: formData.children.map((child, i) => {
                if (i === index) return { ...child, [name]: value };
                else return child;
            }),
        });

        console.log('index: ', index);
        console.log('formData: ', formData.children);
    };

    return (
        <div className="form container">
            <p className="form__disclaimer">*Required Fields</p>
            <form onSubmit={handleSubmit} className="row">
                {/* Spouse Details */}
                <div className="mb-4 row">
                    <label htmlFor="spouse_lastname" className="col-sm-3">
                        Spouse's Last Name
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="spouse_lastname"
                            name="spouse_lastname"
                            placeholder="Enter spouse's last name"
                            value={formData.spouse_lastname}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <label htmlFor="spouse_firstname" className="col-sm-3">
                        Spouse's First Name
                    </label>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className="form-control"
                            id="spouse_firstname"
                            name="spouse_firstname"
                            placeholder="Enter spouse's first name"
                            required={formData.spouse_lastname} // 'converts any value to a boolean.
                        />
                    </div>
                    <label htmlFor="spouse_extension" className="col-sm-2">
                        Extension Name
                        <p className="form__sub-label">(ex. Jr./Sr.)</p>
                    </label>
                    <div className="col-sm-3">
                        <input
                            type="text"
                            className="form-control"
                            id="spouse_extension"
                            name="spouse_extension"
                            placeholder="Enter spouse's extension name"
                        />
                    </div>
                </div>

                <div className="mb-5 row">
                    <label htmlFor="spouse_middle_name" className="col-sm-3">
                        Spouse's Middle Name
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="spouse_middle_name"
                            name="spouse_middle_name"
                            placeholder="Enter spouse's middle name"
                        />
                    </div>
                </div>

                <div className="mb-4 row">
                    <label htmlFor="occupation" className="col-sm-3">
                        Occupation*
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="occupation"
                            name="occupation"
                            placeholder="Enter occupation"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4 row">
                    <label htmlFor="spouse_employer" className="col-sm-3">
                        Employer/Business Name
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="spouse_employer"
                            name="spouse_employer"
                            placeholder="Enter employer/business name"
                        />
                    </div>
                </div>

                <div className="mb-4 row">
                    <label
                        htmlFor="spouse_business_address"
                        className="col-sm-3"
                    >
                        Business Address
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="spouse_business_address"
                            name="spouse_business_address"
                            placeholder="Enter business address"
                        />
                    </div>
                </div>

                <div className="mb-5 row">
                    <label htmlFor="spouse_telephone" className="col-sm-3">
                        Telephone No.
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="tel"
                            className="form-control"
                            id="spouse_telephone"
                            name="spouse_telephone"
                            placeholder="Enter telephone number"
                        />
                    </div>
                </div>

                {/* Father's Details */}
                <div className="mb-4 row">
                    <label htmlFor="father_lastname" className="col-sm-3">
                        Father's Last Name*
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="father_lastname"
                            name="father_lastname"
                            placeholder="Enter father's last name"
                            required
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <label htmlFor="father_firstname" className="col-sm-3">
                        Father's First Name*
                    </label>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className="form-control"
                            id="father_firstname"
                            name="father_firstname"
                            placeholder="Enter father's first name"
                            required
                        />
                    </div>

                    <label htmlFor="father_extension_name" className="col-sm-2">
                        Extension Name
                        <p className="form__sub-label">(ex. Jr./Sr.)</p>
                    </label>
                    <div className="col-sm-3">
                        <input
                            type="text"
                            className="form-control"
                            id="father_extension_name"
                            name="father_extension_name"
                            placeholder="Enter father's extension name"
                        />
                    </div>
                </div>

                <div className="mb-5 row">
                    <label htmlFor="father_middlename" className="col-sm-3">
                        Father's Middle Name
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="father_middlename"
                            name="father_middlename"
                            placeholder="Enter father's middle name"
                        />
                    </div>
                </div>

                {/* Mother's Details */}
                <div className="row mb-4">
                    <label htmlFor="mother_lastname" className="col-sm-3">
                        Mother's Last Name*
                        <p className="form__sub-label">(Maiden Name)</p>
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="mother_lastname"
                            name="mother_lastname"
                            placeholder="Enter mother's last name"
                            required
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <label htmlFor="mother_firstname" className="col-sm-3">
                        Mother's First Name*
                    </label>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className="form-control"
                            id="mother_firstname"
                            name="mother_firstname"
                            placeholder="Enter mother's first name"
                            required
                        />
                    </div>

                    <label htmlFor="mother_extension" className="col-sm-2">
                        Extension Name
                        <p className="form__sub-label">
                            (Maiden Name; Ex. Jr./Sr.)
                        </p>
                    </label>
                    <div className="col-sm-3">
                        <input
                            type="text"
                            className="form-control"
                            id="mother_extension"
                            name="mother_extension"
                            placeholder="Enter mother's extension name"
                        />
                    </div>
                </div>

                <div className="row">
                    <label htmlFor="mother_middle_name" className="col-sm-3">
                        Mother's Middle Name
                        <p className="form__sub-label">(Maiden Name)</p>
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="mother_middle_name"
                            name="mother_middle_name"
                            placeholder="Enter mother's middle name"
                        />
                    </div>
                </div>

                {/* Children Details */}
                <div className="children__details ">
                    {formData.children.map((child, index) => (
                        <div key={index}>
                            <div className="mb-4 row mt-5">
                                <label
                                    htmlFor={`child_fullname_${index}`}
                                    className="col-sm-3"
                                >
                                    Child's Full Name
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={`child_fullname_${index}`}
                                        name={`child_fullname`}
                                        placeholder="First name, Middle Name, Last Name"
                                        value={
                                            formData.children[index]
                                                .child_fullname
                                        }
                                        onChange={(e) =>
                                            handleChildInputChange(e, index)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label
                                    htmlFor={`child_dob_${index}`}
                                    className="col-sm-3"
                                >
                                    Date of Birth
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="date"
                                        className="form-control"
                                        id={`child_dob_${index}`}
                                        name={`child_dob_${index}`}
                                        value={
                                            formData.children[index].child_dob
                                        }
                                        required={
                                            formData.children[index]
                                                .child_fullname
                                        }
                                        onChange={(e) =>
                                            handleChildInputChange(e, index)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add more children */}
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-9 d-flex justify-content-between">
                            <button
                                type="button"
                                className="form__btn form__add-btn py-2 px-2 "
                                onClick={addChild}
                            >
                                + Add Child
                            </button>

                            <button
                                type="button"
                                className="form__btn form__remove-btn py-2 px-2"
                                onClick={removeChild}
                            >
                                - Remove Child
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="form__line mt-4" />

                {/* Navigate */}
                <div className=" d-flex justify-content-between mt-2 mb-4">
                    {/* Back Button */}
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary form__navbtn"
                            onClick={prevPage}
                        >
                            Previous
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="btn form__navbtn btn-primary"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormPage2;

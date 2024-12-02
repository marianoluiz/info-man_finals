import React from 'react';
import '../../styles/form.scss';

const FormPage2 = ({ nextPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextPage();
  };

  return (
    <div className="form container">
      <p className="form__disclaimer">*Required Fields</p>
      <form onSubmit={handleSubmit} className="mb-3 row">

        {/* Spouse Details */}
        <div className="mb-3 row">
          <label htmlFor="spouse_lastname" className="col-sm-3">
            Spouse Last Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="spouse_lastname"
              name="spouse_lastname"
              placeholder="Enter spouse's last name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="spouse_firstname" className="col-sm-3">
            Spouse First Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="spouse_firstname"
              name="spouse_firstname"
              placeholder="Enter spouse's first name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="spouse_extension" className="col-sm-3">
            Spouse Extension Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="spouse_extension"
              name="spouse_extension"
              placeholder="Enter spouse's extension name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="spouse_middle_name" className="col-sm-3">
            Spouse Middle Name
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

        <div className="mb-3 row">
          <label htmlFor="spouse_occupation" className="col-sm-3">
            Occupation
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="spouse_occupation"
              name="spouse_occupation"
              placeholder="Enter spouse's occupation"
            />
          </div>
        </div>

        <div className="mb-3 row">
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

        <div className="mb-3 row">
          <label htmlFor="spouse_business_address" className="col-sm-3">
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

        <div className="mb-3 row">
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
        <div className="mb-3 row">
          <label htmlFor="father_lastname" className="col-sm-3">
            Father's Last Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="father_lastname"
              name="father_lastname"
              placeholder="Enter father's last name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="father_firstname" className="col-sm-3">
            Father's First Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="father_firstname"
              name="father_firstname"
              placeholder="Enter father's first name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="father_middle_name" className="col-sm-3">
            Father's Middle Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="father_middle_name"
              name="father_middle_name"
              placeholder="Enter father's middle name"
            />
          </div>
        </div>

        {/* Mother's Details */}
        <div className="mb-3 row">
          <label htmlFor="mother_lastname" className="col-sm-3">
            Mother's Last Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="mother_lastname"
              name="mother_lastname"
              placeholder="Enter mother's last name (maiden)"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="mother_firstname" className="col-sm-3">
            Mother's First Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="mother_firstname"
              name="mother_firstname"
              placeholder="Enter mother's first name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="mother_extension" className="col-sm-3">
            Mother's Extension Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="mother_extension"
              name="mother_extension"
              placeholder="Enter mother's extension name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="mother_middle_name" className="col-sm-3">
            Mother's Middle Name
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
        <div className="children-details">
          <div className="mb-3 row">
            <label htmlFor="child_name" className="col-sm-3">
              Name of Child
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="child_name"
                name="child_name"
                placeholder="Enter child's name"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="child_lastname" className="col-sm-3">
              Last Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="child_lastname"
                name="child_lastname"
                placeholder="Enter child's last name"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="child_firstname" className="col-sm-3">
              First Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="child_firstname"
                name="child_firstname"
                placeholder="Enter child's first name"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="child_extension" className="col-sm-3">
              Extension Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="child_extension"
                name="child_extension"
                placeholder="Enter child's extension name"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="child_middle_name" className="col-sm-3">
              Middle Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="child_middle_name"
                name="child_middle_name"
                placeholder="Enter child's middle name"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="child_dob" className="col-sm-3">
              Date of Birth
            </label>
            <div className="col-sm-9">
              <input
                type="date"
                className="form-control"
                id="child_dob"
                name="child_dob"
              />
            </div>
          </div>

          {/* Add more children */}
          <div className="mb-3 row">
            <div className="col-sm-12 text-center">
              <button type="button" className="btn btn-secondary">
                Add More Child
              </button>
            </div>
          </div>
        </div>

        <div className="form__actions text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage2;

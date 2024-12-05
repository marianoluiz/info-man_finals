import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import FamilyBg from './FamilyBg';
import FormComplete from './FormComplete';
import MainLayout from '../../layout/MainLayout';
import FormStepper from '../../components/FormStepper';
import FormBanner from '../../components/FormBanner';

const MultiPageForm = () => {
    // Current Page state
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        middlename: '',
        extension_name: '',
        dob: '',
        pob: '',
        sex: '',
        civil_status: '',
        height: '',
        weight: '',
        blood_type: '',
        gsis_no: '',
        pagibig_no: '',
        philhealth_no: '',
        sss_no: '',
        tin_no: '',
        agency_employee_no: '',
        citizenship: '',
        residential_address: '',
        telephone_no: '',
        mobile_no: '',
        email: '',
        civil_status_other: '', // Added for "Other" civil status
        dual_citizen_status: '', // Added for dual citizenship
        dual_citizenship_country: '', // Added for dual citizenship country
    });

    // Pages of the form
    const formPages = ['Personal Information', 'Family Background'];

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
    const goToPage = (pageIndex) => setCurrentPage(pageIndex + 1);
    // pages starts with 1 cause there is no case 0 on switch case
    // Use this function for enabled navigation in stepper

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <PersonalInfo nextPage={nextPage} formData={formData} setFormData={setFormData} />;
            case 2:
                return <FamilyBg nextPage={nextPage} prevPage={prevPage} formData={formData} setFormData={setFormData} />;
            case 3:
                return <FormComplete />;
            default:
                return <PersonalInfo nextPage={nextPage} />;
        }
    };

    return (
        <MainLayout>
            <FormBanner />
            <FormStepper
                formPages={formPages}
                currentPage={currentPage - 1}
                onPageClick={goToPage} // Use this prop for enabled navigation in stepper
                disabled={currentPage === 3}
            />
            {renderPage()}
        </MainLayout>
    );
};

export default MultiPageForm;

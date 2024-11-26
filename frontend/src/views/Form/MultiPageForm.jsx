import React, { useState } from 'react';
import FormPage1 from './PersonalInfo';
import FormPage2 from './FamilyBg';
import FormPage3 from './Education';
import FormComplete from './FormComplete';
import MainLayout from '../../layout/MainLayout';
import FormStepper from '../../components/FormStepper';

const MultiPageForm = () => {
  const [ page, setPage ] = useState(1);

  const steps = ['Personal Information', 'Family Background', 'Education', 'Civil Service', 'Work Experience', 'Learning and Development', 'Voluntary Work', 'Others'];

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);
  const goToPage = (pageIndex) => setPage(pageIndex + 1);

  const renderPage = () => {
    switch (page) {
      case 1: 
        return <FormPage1 nextPage = {nextPage}/>;
      case 2:
        return <FormPage2 nextPage = {nextPage} prevPage = {prevPage}/>;
      case 3:
        return <FormPage3 nextPage = {nextPage} prevPage = {prevPage}/>;
      case 4:
        return <FormComplete />
      default:
        return <FormPage1 nextPage = {nextPage} />;
    }
  };

  return(
    <MainLayout>
      <FormStepper steps={steps} currentStep={page - 1} onStepClick={goToPage} />
      {renderPage()}
    </MainLayout>
  )

}

export default MultiPageForm;
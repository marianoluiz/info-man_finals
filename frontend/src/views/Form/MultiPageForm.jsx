import React, { useState } from 'react';
import FormPage1 from './PersonalInfo';
import FormPage2 from './FamilyBg';
import FormPage3 from './Education';
import FormComplete from './FormComplete';
import MainLayout from '../../layout/MainLayout';
import FormStepper from '../../components/FormStepper';
import FormBanner from '../../components/FormBanner'

const MultiPageForm = () => {

  // Current Page state
  const [ currentPage, setCurrentPage ] = useState(1);

  // Pages of the form
  const formPages = ['Personal Information', 'Family Background', 'Education', 'Civil Service', 'Work Experience', 'Learning and Development', 'Voluntary Work', 'Others'];

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const goToPage = (pageIndex) => setCurrentPage(pageIndex + 1); 
  // pages starts with 1 cause there is no case 0 on switch case

  const renderPage = () => {
    switch (currentPage) {
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
      <FormBanner />
      <FormStepper formPages={formPages} currentPage={currentPage - 1} onPageClick={goToPage} />
      {renderPage()}
    </MainLayout>
  )

}

export default MultiPageForm;
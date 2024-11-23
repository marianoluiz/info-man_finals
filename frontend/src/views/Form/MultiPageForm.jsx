import React, { useState } from 'react';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';
import FormComplete from './FormComplete';

const MultiPageForm = () => {
  const [ page, setPage ] = useState(1);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

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
    <> 
      <h1>MultiPage Form</h1>
      {renderPage()}
    </>
  )

}

export default MultiPageForm;
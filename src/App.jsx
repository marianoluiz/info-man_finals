import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home.jsx';
import FormPage1 from './views/Form/FormPage1.jsx';
import FormPage2 from './views/Form/FormPage2.jsx';
import FormPage3 from './views/Form/FormPage3.jsx';
import FormComplete from './views/Form/FormComplete.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/form-page-1" element={<FormPage1 />} />
      <Route path="/form-page-2" element={<FormPage2 />} />
      <Route path="/form-page-3" element={<FormPage3 />} />
      <Route path="/form-complete" element={<FormComplete />} />
    </Routes>
  );
};

export default App;
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home.jsx';
import MultiPageForm from './views/Form/MultiPageForm.jsx';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<MultiPageForm />} />
        </Routes>
    );
};

export default App;

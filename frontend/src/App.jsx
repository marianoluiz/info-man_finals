import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home.jsx';
import MultiPageForm from './views/Form/MultiPageForm.jsx';
import AdminDashboard from './views/Admin/AdminDashboard.jsx';
import Login from './views/Auth/Login.jsx';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<MultiPageForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
    );
};

export default App;

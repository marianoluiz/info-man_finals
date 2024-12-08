import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home.jsx';
import MultiPageForm from './views/Form/MultiPageForm.jsx';
import AdminDashboard from './views/Admin/AdminDashboard.jsx';
import Login from './views/Auth/Login.jsx';
import AdminManagement from './views/Admin/AdminManagement.jsx';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<MultiPageForm />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/admin"
                element={
                    <PrivateRoute>
                        {' '}
                        {/* private route is a component */}
                        <AdminDashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path="/admin/dashboard"
                element={
                    <PrivateRoute>
                        <AdminDashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path="/admin/manage"
                element={
                    <PrivateRoute>
                        <AdminManagement />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default App;

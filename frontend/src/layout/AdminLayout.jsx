import PropTypes from 'prop-types';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx'
const AdminLayout = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <div>
                {/* sidebar */}
                <Sidebar />
                <div className="mt-5 pt-5">
                    <NavLink
                        to="/admin/dashboard"
                        className="dashboard__nav-link"
                    >
                        <h1>Dashboard</h1>
                    </NavLink>
                    <NavLink to="/admin/manage" className="dashboard__nav-link">
                        <h1>Admin Management</h1>
                    </NavLink>
                </div>

                <main>{children}</main>
            </div>
        </>
    );
};

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminLayout;

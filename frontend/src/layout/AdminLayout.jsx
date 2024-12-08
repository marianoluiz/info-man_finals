import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar.jsx'
import '../styles/admin.scss'

const AdminLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <main className="admin__body">{children}</main>
            </div>
        </>
    );
};

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminLayout;

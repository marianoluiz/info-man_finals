import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar.jsx'
import '../styles/admin.scss'
import { useSidebar } from '../context/SidebarContext';

const AdminLayout = ({ children }) => {
    const [showSidebar] = useSidebar();

    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <main className={`admin__body ${showSidebar ? 'admin__body-min' : ''}`}>{children}</main>
            </div>
        </>
    );
};

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminLayout;

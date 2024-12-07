import AdminLayout from '../../layout/AdminLayout';
import '../../styles/AdminDashboard.scss';

const AdminDashboard = () => {
    return (


        <AdminLayout>
            <div className="admin-dashboard container">
                <h1 className="admin-dashboard__title">Admin Dashboard</h1>
                
                <p>There needs to be a login validation every 5 mins</p>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
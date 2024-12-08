import AdminLayout from '../../layout/AdminLayout';
import '../../styles/admin.scss';
import ChartComponent from '../../components/ChartComponent';

const AdminDashboard = () => {
    return (
        <AdminLayout>
            <div className="admin__dashboard container">
                <h1 className="admin-dashboard__title">Admin Dashboard</h1>

                <p>There needs to be a login validation</p>

                <div className="chart-container">
                    {/* <ChartComponent /> */}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;

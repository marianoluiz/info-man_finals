import AdminLayout from '../../layout/AdminLayout';

const AdminMangement = () => {
    return (
        <AdminLayout>
            <div className="admin-management container">
                <h1 className="admin-dashboard__title">Admin Management</h1>
                
                <p>There needs to be a login validation every 5 mins</p>
            </div>
        </AdminLayout>
    );
};

export default AdminMangement;
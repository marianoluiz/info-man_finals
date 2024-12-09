import { useState, useEffect } from 'react';
import AdminLayout from '../../layout/AdminLayout';
import '../../styles/admin.scss';
import ChartComponent from '../../components/ChartComponent';
import { fetchStudentData } from '../../api/StudentApi';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const AdminDashboard = () => {
    const [studentData, setStudentData] = useState([]);
    const [totalStudents, setTotalStudents] = useState(0); // Use state for totalStudents
    const [genderStats, setGenderStats] = useState({ male: 0, female: 0 });
    const [citizenshipStats, setCitizenshipStats] = useState({});
    const [civilStatusStats, setCivilStatusStats] = useState({});

    // Fetch student data
    useEffect(() => {
        const getStudentData = async () => {
            try {
                const data = await fetchStudentData();
                setStudentData(data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        getStudentData();
    }, []);

    // Calculate statistics
    useEffect(() => {
        const calculateStats = () => {
            const genderStats = { male: 0, female: 0 };
            const citizenshipStats = {};
            const civilStatusStats = {};

            studentData.forEach((student) => {
                // Gender stats
                if (student.gender === 'male') {
                    genderStats.male += 1;
                } else if (student.gender === 'female') {
                    genderStats.female += 1;
                }

                // Citizenship stats
                if (citizenshipStats[student.citizenship]) {
                    citizenshipStats[student.citizenship] += 1;
                } else {
                    citizenshipStats[student.citizenship] = 1;
                }

                // Civil status stats
                if (civilStatusStats[student.civil_status]) {
                    civilStatusStats[student.civil_status] += 1;
                } else {
                    civilStatusStats[student.civil_status] = 1;
                }
            });

            setGenderStats(genderStats);
            setCitizenshipStats(citizenshipStats);
            setCivilStatusStats(civilStatusStats);
            setTotalStudents(studentData.length);
        };

        calculateStats();
    }, [studentData]);

    useEffect(() => {
        console.log('student data: ', studentData)
        console.log('genderStats: ', genderStats);
        console.log('citizenshipStats: ', citizenshipStats);
        console.log('civilStatusStats: ', civilStatusStats);
        console.log('studentData.length: ', studentData.length);

    })

    return (
        <AdminLayout>
            <div className="admin__dashboard container">
                <h1 className="admin-dashboard__title">Admin Dashboard</h1>

                <div className="row">
                    {/* 1st col */}
                    <div className="col-sm-8 dashboard__col">
                        {/* 1st col, 1st row */}
                        <div className="row">
                            <div className="dashboard__col dashboard__total-stud col-sm-6">
                                <div className="card card__total-stud">
                                    <div className="card-body">
                                        <p className="card-text">
                                            Total number of students
                                        </p>
                                        <h1 className="card-title">
                                            {totalStudents}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard__col dashboard__title col-sm-6">
                                <h1>Dashboard Title</h1>
                            </div>
                        </div>
                        {/* 1st col, 2nd row */}
                        <div className="row">
                            {/* Bar graph horizontal, Civil Status */}
                            <div className="dashboard__col dashboard__civil col-sm-6">
                                <h3>Bar graph horizontal, Civil Status</h3>
                                <ul>
                                    {Object.entries(civilStatusStats).map(
                                        ([status, count]) => (
                                            <li key={status}>
                                                {status}: {count}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                            {/* Bar graph vertical, Citizenship Type */}
                            <div className="dashboard__col dashboard__citizen col-sm-6">
                                <h3>Bar graph vertical, Citizenship Type</h3>

                                <ul>
                                    {Object.entries(citizenshipStats).map(
                                        ([citizenship, count]) => (
                                            <li key={citizenship}>
                                                {citizenship}: {count}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2nd col */}
                    <div className="dashboard__col dashboard__gender col-sm-4">
                        <h5>Gender Pie Chart</h5>
                        <ul>
                            <li>Male: {genderStats.male}</li>
                            <li>Female: {genderStats.female}</li>
                        </ul>
                        <ChartComponent />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;

//import apiClient from './apiClient';

export const fetchStudentData = async () => {
    try {
        /*         const response = await apiClient.get('/student/data');
        return response.data; */
        const dummyData = [
            {
                id: 1,
                name: 'John Doe',
                age: 20,
                gender: 'male',
                citizenship: 'filipino',
                civil_status: 'single',
            },
            {
                id: 2,
                name: 'Jane Smith',
                age: 22,
                gender: 'male',
                citizenship: 'filipino',
                civil_status: 'widowed',
            },
            {
                id: 3,
                name: 'Alice Johnson',
                age: 19,
                gender: 'female',
                citizenship: 'dual_citizen',
                civil_status: 'married',
            },
        ];
        return dummyData;
    } catch (error) {
        console.error('Error fetching student data:', error);
        throw error;
    }
};

export const createStudent = async (student) => {
    try {
        //await apiClient.post('/student/data', student);
    } catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
};

export const updateStudent = async (id, student) => {
    try {
        //await apiClient.put(`/student/data/${id}`, student);
    } catch (error) {
        console.error('Error updating student:', error);
        throw error;
    }
};

export const deleteStudent = async (id) => {
    try {
        //await apiClient.delete(`/student/data/${id}`);
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error;
    }
};

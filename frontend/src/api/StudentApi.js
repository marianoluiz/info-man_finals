import apiClient from './apiClient';

export const fetchStudentData = async () => {
    try {
        //code here
        const response = await apiClient.get('/personalinfo');
        return response.data;  // Return the fetched data
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

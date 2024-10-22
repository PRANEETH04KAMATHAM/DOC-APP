import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Doctor-related API calls
export const getAllDoctors = () => api.get('/doctors');
export const addDoctor = (doctorData) => api.post('/doctors', doctorData);
export const getDoctor = (id) => api.get(`/doctors/${id}`);
export const updateDoctor = (id, doctorData) => api.put(`/doctors/${id}`, doctorData);
export const deleteDoctor = (id) => api.delete(`/doctors/${id}`);

// Patient-related API calls
export const getAllPatients = () => api.get('/patients');
export const addPatient = (patientData) => api.post('/patients', patientData);
export const getPatient = (id) => api.get(`/patients/${id}`);

// Appointment-related API calls
export const getAllAppointments = () => api.get('/appointments');
// export const addAppointment = (appointmentData) => api.post('/appointments', {
//   doctorId: appointmentData.doctorId,
//   patientId: appointmentData.patientId,
//   date: appointmentData.date
// });
export const getAppointment = (id) => api.get(`/appointments/${id}`);

// New appointment-related API calls

export const getPatientAppointments = (patientId) => api.get(`/appointments/patient/${patientId}`);


//testing
export const getDoctorAppointments = async (doctorId) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`${API_BASE_URL}/appointments/doctor/${doctorId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Doctor appointments response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctor appointments:', error);
    throw error;
  }
};


// Add this new function
export const testDatabaseConnection = () => api.get('/test-connection');

// Add this new function for user registration
export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//working
export const loginUser = (userData) => {
  return axios.post(`${API_BASE_URL}/login`, userData);
};


//working
export const getUserDetails = (userId) => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_BASE_URL}/user/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};


export const checkUser = (userId) => {
  return axios.get(`${API_BASE_URL}/check-user/${userId}`);
};

// export const getDoctorDetails = async (doctorId) => {
//   const token = localStorage.getItem('token');
//   console.log('getDoctorDetails called with ID:', doctorId);
//   console.log('Token:', token);
//   try {
//     if (!doctorId) {
//       throw new Error('Doctor ID is undefined');
//     }
//     const response = await axios.get(`${API_BASE_URL}/doctor/profile/${doctorId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     console.log('getDoctorDetails response:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error in getDoctorDetails:', error);
//     throw error;
//   }
// };


// Search functionality
// export const searchDoctors = (searchTerm) => {
//   console.log('Searching for doctor:', searchTerm);
//   return axios.get(`${API_BASE_URL}/doctors/search/${encodeURIComponent(searchTerm)}`)
//     .then(response => {
//       console.log('Search response:', response.data);
//       return response.data;
//     })
//     .catch(error => {
//       console.error('Error in searchDoctors:', error);
//       if (error.response) {
//         console.error('Error response:', error.response.data);
//         console.error('Error status:', error.response.status);
//       } else if (error.request) {
//         console.error('Error request:', error.request);
//       } else {
//         console.error('Error message:', error.message);
//       }
//       throw error;
//     });
// };

export const searchDoctors = async (searchTerm) => {
  console.log('Searching for doctor by specialization:', searchTerm);
  return axios.get(`${API_BASE_URL}/doctors/search/${encodeURIComponent(searchTerm)}`)
    .then(response => {
      console.log('Search response:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error in searchDoctors:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      throw error;
    });
};

export const addAppointment = async (appointmentData) => {
  const token = localStorage.getItem('token');
  console.log('Sending appointment data:', appointmentData);
  try {
    const response = await axios.post(`${API_BASE_URL}/appointments/create`, appointmentData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error in addAppointment:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default api;

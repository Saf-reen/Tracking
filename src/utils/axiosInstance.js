// axiosInstance.js
import axios from 'axios';
import {useNavigate} from "react-router-dom";

// Create an axios instance with a base URL
const baseAPI = "http://192.168.0.175:7000";
//  axios instance
export const axiosInstance = axios.create({
  baseURL: baseAPI,
  headers: {
    "Content-Type": "application/json",
  },
});

const Storage =() =>{
  const navigate=useNavigate();
// Request interceptor to add the auth token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      localStorage.removeItem('access_token');
      navigate('/signin');
    }
    return Promise.reject(error);
  }
);
}
export default Storage;

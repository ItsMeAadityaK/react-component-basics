import axios from 'axios';

// Create AbortController for request cancellation
const controller = new AbortController();

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // example API
  headers: {
    'Accept': '*/*',
    'X-Request-ID': Math.random().toString(36).substring(7),
  },
  timeout: 5000, // 5 seconds timeout
  signal: controller.signal,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Example token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { axiosInstance, controller };

import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://hina-pqmjv.appengine.bfcplatform.vn",
    headers: {
        'content-type': 'application/json',
    },
    timeout: 5000,
});

axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient;

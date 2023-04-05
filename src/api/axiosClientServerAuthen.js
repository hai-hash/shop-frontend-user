import axios from 'axios';

const axiosClientServerAuthen = axios.create({
    baseURL: "https://tashapy-mtsig.appengine.bfcplatform.vn",
    headers: {
        'content-type': 'application/json',
    },
    timeout: 5000,
});

axiosClientServerAuthen.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClientServerAuthen.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClientServerAuthen;

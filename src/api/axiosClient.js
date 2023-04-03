import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://hina-pqmjv.appengine.bfcplatform.vn",
    headers: {
        'content-type': 'application/json',
        // 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODAzODU2NzIsImlhdCI6MTY3OTc4MDg3MiwibmJmIjoxNjc5NzgwODcyLCJzdWIiOiI2NDBhZmRhZTk5Y2M3ZWMwN2Y3NTg2YjYifQ.DJXFi0-2jFIZ3y8JIBUym8LEfLNbSqR_R1F81wuiSafr9t1b3bxFOi6rex3ELTjeZIZxwKtyzmi5bTviN9h43A',
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

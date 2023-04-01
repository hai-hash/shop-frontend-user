import axiosClient from "@/api/axiosClient";
const loginApi = {
    login: (data) => {
        const url = '/auth/login';
        return axiosClient.post(url, data);
    },
}

export default loginApi;
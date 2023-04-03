import axiosClient from "@/api/axiosClientServerAuthen";
const loginApi = {
    login: (data) => {
        const url = '/auth/login';
        return axiosClient.post(url, data);
    },
    registry:(data) =>{
        const url = '/auth/register';
        return axiosClient.post(url,data);
    }
}

export default loginApi;
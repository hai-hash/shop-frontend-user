import axiosClient from "./../axiosClient";
import * as urls from '../urls/BlogUrls';
const BlogService = {
    getAll: (params) => {
        const url = urls.GET_ALL;
        return axiosClient.get(url, { params });
    },
    create: (data) => {
        const url = urls.CREATE;
        return axiosClient.post(url, data)
    },
    getPageByFilter:(data) =>{
        const url = '/pages';
        return axiosClient.post(url,data)
    },
    getPagesByParam:(params) =>{
        const url = '/page'
        return axiosClient.get(url,{params});
    },
    deletePageById:(params) =>{
        const url = '/page'
        return axiosClient.delete(url,{params});
    }
}

export default BlogService;
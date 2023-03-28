import axiosClient from "./../axiosClient";
import * as urls from '../urls/BlogUrls';
const BlogService = {
    getAll: (params) => {
        const url = urls.GET_ALL;
        return axiosClient.get(url, { params });
    },
    create: (params) => {
        const url = urls.CREATE;
        return axiosClient.post(url, data, {})
    },
}

export default BlogService;
import axiosClient from "./../axiosClient";
import * as urls from '../urls/BlogUrls';
const BlogService = {
    getAll: (params) => {
        const url = urls.GET_ALL;
        return axiosClient.get(url, { params });
    },
    uploadImage: (data) => {
        const url = urls.UPLOAD_IMAGE;
        return axiosClient.post(url, data);
    }
}

export default BlogService;
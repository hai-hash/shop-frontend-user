import axiosClient from "./../axiosClient";
import * as urls from '../urls/UploadUrls';
const UploadService = {
    uploadImage: (data) => {
        const url = urls.UPLOAD_IMAGE;
        return axiosClient.post(url, data);
    }
}

export default UploadService;
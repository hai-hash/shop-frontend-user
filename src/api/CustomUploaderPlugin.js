import axios from "axios";
class MyUploadAdapter {
    constructor(loader) {
        // The file loader instance to use during the upload.
        this.loader = loader;
        this.url = 'https://api.cloudinary.com/v1_1/filmtv/image/upload';
        this.token = localStorage.getItem("token");
    }

    request(file) {
        return fetch(this.url, { // Your POST endpoint
            method: 'POST',
            // headers: {
            //   'x-csrf-token': _token
            // },
            body: file // This is your file object
        });
    }
    // Starts the upload process.
    upload() {
        this.loader.file.then(async (filenew) => {
                const data = new FormData();
                data.append('file', filenew, filenew.name);
                data.append('upload_preset', 'filmtvimages');
                const response = await axios({
                    url: this.url,
                    method: 'post',
                    data,
                    headers: {
                        'Content-Type': 'multipart/form-data;'
                    },
                    withCredentials: false
                })
                console.log(response);
                return response.data.url;
            });
        }
}

// ...

export default function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        // Configure the URL to the upload script in your back-end here!
        return new MyUploadAdapter(loader);
    };
}
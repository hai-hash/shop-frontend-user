const UploadService = {
    uploadImage: async (file) => {
        const data = new FormData();
        data.append('file', file);
        
        const responseURL = fetch('https://hina-pqmjv.appengine.bfcplatform.vn/image', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODAzODU2NzIsImlhdCI6MTY3OTc4MDg3MiwibmJmIjoxNjc5NzgwODcyLCJzdWIiOiI2NDBhZmRhZTk5Y2M3ZWMwN2Y3NTg2YjYifQ.DJXFi0-2jFIZ3y8JIBUym8LEfLNbSqR_R1F81wuiSafr9t1b3bxFOi6rex3ELTjeZIZxwKtyzmi5bTviN9h43A',
                },
                body: data
            })
            .then((response) => response.json())
            .then((data) => {
                let url = data.file;
                return url;
            }).catch(() => {
                return null;
            })

        return responseURL;
    }
}

export default UploadService;
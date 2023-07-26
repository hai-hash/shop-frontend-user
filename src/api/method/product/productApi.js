import axiosClient from "@/api/axiosClient";
const productApi = {
    getProduct: (params) => {
        const url = "/products";
        return axiosClient.get(url,{params});
    },
    getProductDetail: (params) =>{
        const url = "/product";
        return axiosClient.get(url,{params});
    },
    getCategories: (data) =>{
        const url = "/categories";
        return axiosClient.post(url,data);
    },
    getProductByFilter: (data) =>{
        const url = "/products";
        return axiosClient.post(url,data);
    }


}

export default productApi;
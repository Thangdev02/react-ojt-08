import axios from "axios";

const API_URL = "http://localhost:9999";

//viet ham e get all Product

export const getAllProduct = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`); //1 CAI object {status,data}
        console.log(response.data);
        return response.data //array // null
    } catch (error) {
        console.log(error);
        
    }
}
export const getProductByID = async (id) => { //tham so param, nhan ve
    try {
        const response = await axios.get(`${API_URL}/products/${id}`); 
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}
export const createProduct = (productDate) => {
    const result = axios.post(`${API_URL}/products`,productDate)
}
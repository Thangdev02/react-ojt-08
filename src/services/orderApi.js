// nhung thu lien quan toi order
// 1.tao Order tu nguoi dung
// 2. Admin xem dc tat order dang nhan don
// 3. Admin xem duoc chi tiet, update status //Dang chuan bi hang
// 4. Search Sort Filter, Delete Order

import axios from "axios";

const API_URL = "http://localhost:9999";

export const createOrder = async (oderData) => {
    try {
        const result = await axios.post(`${API_URL}/orders`,oderData) // tao duoc roi
        console.log("Don moi tao",result);
        
        return result.data
        //confign add Bear Token, fetch khai bao phuong thuc, khai bao content type
    } catch (error) {
        console.log(error);
        
    }
}

export const getAllOrder = async () => {
    try {
        const response = await axios.get(`${API_URL}/orders`); //1 CAI object {status,data}
        console.log(response.data);
        return response.data //array // null
    } catch (error) {
        console.log(error);
        
    }
}
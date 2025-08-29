import axios from "axios";

const API_URL = "http://localhost:9999";

//authentication - login, signup, forgot,verify otp, email

export const login =  async (Username, Password) => {
  console.log("param",Username, Password);
  
    try {
        const response =  await axios.get(`${API_URL}/user`, {
            params: {
                Username,
                Password
            },
        });
        console.log(response);
        
        if (response.data.length > 0) {
            return response.data[0];
        } else {
            throw new Error("sai tai khoan hoac mat khau")
        }
    } catch (error) {
        throw error;
    }
}

export const RegisterUser = async (userData) => {
    try {
        const result = await axios.post(`${API_URL}/user`,userData) // tao duoc roi
        console.log("Register",result);
        
        return result.data
        //confign add Bear Token, fetch khai bao phuong thuc, khai bao content type
    } catch (error) {
        console.log(error);
    }
}
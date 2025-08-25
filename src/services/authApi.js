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

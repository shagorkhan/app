import axios from "axios";
import url from "./url";

const getWithdrawHistory = async (token) => {
    return axios.get(`${url}/balance/withdraw-history`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
};
export default getWithdrawHistory;
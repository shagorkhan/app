import axios from "axios";
import url from "./url";

const getDepositHistory = async (token) => {
    return axios.get(`${url}/balance/deposit/get`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
};
export default getDepositHistory;
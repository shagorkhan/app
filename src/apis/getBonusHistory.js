import axios from "axios";
import url from "./url";

const getBonusHistory = async (token) => {
    return axios.get(`${url}/balance/turnover/bonus`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
};
export default getBonusHistory;
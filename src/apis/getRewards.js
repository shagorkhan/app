import axios from "axios";
import url from "./url";

const getRewards = async (token) => {
    return axios.get(`${url}/rewards/rewards/user/history`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
};
export default getRewards;
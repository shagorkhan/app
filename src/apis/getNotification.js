import axios from "axios"
import url from "./url"

const getUserNotification=async(token)=>{
    return axios.get(`${url}/admin/message/user/get`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}
export default getUserNotification
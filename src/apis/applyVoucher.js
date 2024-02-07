import axios from "axios"
import url from "./url"

const applyVoucher=async(d,token)=>{
    return axios.get(`${url}/rewards/voucher/apply/${d}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}
export default applyVoucher
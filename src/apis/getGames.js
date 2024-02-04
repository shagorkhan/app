import axios from "axios"
import url from "./url"

const gateGames=async(id,system)=>{
    return axios.get(`${url}/games/${id}/${system}`)
}
export default gateGames
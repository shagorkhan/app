import axios from "axios";
import url from "./url";

const loginUser = async (username,password) => {
  return await axios.post(`${url}/user/login`,{
    username,
    password
  });
};
export default loginUser;
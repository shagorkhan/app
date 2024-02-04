import axios from "axios";
import url from "./url";

const getUser = async (token) => {
  return await axios.get(`${url}/user/getUser`, {
    headers: { Authorization: "Bearer " + token },
  });
};
export default getUser;

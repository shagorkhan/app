import axios from "axios";
import url from "./url";

const getPromotions = async (token) => {
  return await axios.get(`${url}/balance/promotion/get`, {
    headers: { Authorization: "Bearer " + token },
  });
};
export default getPromotions;

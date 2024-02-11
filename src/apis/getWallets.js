import axios from "axios";
import url from "./url";

const getWallets = async (token,channel) => {
  return await axios.get(`${url}/balance/wallet/get?depositChannel=${channel}`, {
    headers: { Authorization: "Bearer " + token },
  });
};
export default getWallets;

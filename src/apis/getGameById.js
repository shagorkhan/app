import axios from "axios";
import url from "./url";

const gateGameById = async (id, token) => {
  return axios.get(`${url}/games/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export default gateGameById;

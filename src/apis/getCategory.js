import axios from "axios";
import url from "./url";

const getCategory = async () => {
  return await axios.get(`${url}/category`);
};
export default getCategory;
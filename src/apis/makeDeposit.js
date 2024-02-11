import axios from "axios";
import url from "./url";

const makeDeposit = async (token, walletId,amount,promotionId,tranXId) => {
  return await axios.post(
    `${url}/balance/deposit`,
    {
      walletId:walletId ,
      amount: amount,
      promotionId:promotionId&&promotionId,
      tranXId: tranXId,
    },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
};
export default makeDeposit;

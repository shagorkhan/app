import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Input from "../components/Input";
import Depositewithdrawcard from "../components/DepositeWithdrawCard";
import img1 from "../../assets/image12.png";
import img2 from "../../assets/image14.png";
import { useLoader } from "../context/LoaderContext";
import { getValue } from "../functions/storage";
import getWithdrawHistory from "../apis/getWithdrawHistory";

const WithdrawHistory = () => {
  const { showLoader, hideLoader } = useLoader();
  const [data,setData]=useState([])
  useEffect(() => {
    const loadWithdraw = async () => {
      showLoader();
      try {
        const token = await getValue("token");
        if (!token) {
          hideLoader();
          return navigation.goBack();
        }
        const res = await getWithdrawHistory(token);
        setData(res.data);
        hideLoader();
      } catch (error) {
        hideLoader();
        console.error(error);
      }
    };
    loadWithdraw();
  }, []);

  return (
    <View style={styles.container}>
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cardContainer}>
      <Input style={styles.search} placeholder="Search..."></Input>
        {
          data?.map((d,i)=><Depositewithdrawcard
          key={i}
          tnxId={d.wallet?.walletNumber}
          status={d.status}
          amount={d.amount}
          icon1={img2}
          icon2={img1}
          offer="0.00"
          remark={d.remarks}
          date={d.date}
          icon3={d.wallet.walletDetails.icon}
          walletName={d.wallet.walletDetails.methodName}
        ></Depositewithdrawcard>)
        }
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  cardContainer: {
    // marginTop: 10,
  },
  search:{
    marginVertical:10
  }
});

export default WithdrawHistory;

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Input from "../components/Input";
import Depositewithdrawcard from "../components/DepositeWithdrawCard";
import img1 from "../../assets/image12.png";
import img2 from "../../assets/image13.png";
import getDepositHistory from "../apis/getDepositHistory";
import { useLoader } from "../context/LoaderContext";
import { getValue } from "../functions/storage";

const DepositHistory = () => {
  const { showLoader, hideLoader } = useLoader();
  const [data,setData]=useState([])
  useEffect(() => {
    const loadDeposit = async () => {
      showLoader();
      try {
        const token = await getValue("token");
        if (!token) {
          hideLoader();
          return navigation.goBack();
        }
        const res = await getDepositHistory(token);
        setData(res.data);
        hideLoader();
      } catch (error) {
        hideLoader();
        console.error(error);
      }
    };
    loadDeposit();
  }, []);

  return (
    <View style={styles.container}>
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cardContainer}>
      <Input style={styles.search} placeholder="Search..."></Input>
        {
          data?.map((d,i)=><Depositewithdrawcard
          key={i}
          tnxId={d.tranXId}
          status={d.status}
          amount={d.amount}
          icon1={img1}
          icon2={img2}
          offer="0.00"
          remark={d.remarks}
          date={d.date}
          icon3={img1}
          walletName="Bkash"
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

export default DepositHistory;

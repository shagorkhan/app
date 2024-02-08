import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useLoader } from "../context/LoaderContext";
import { getValue } from "../functions/storage";
import DepositBonusCard from "../components/RewardBonusCard";
import getBonusHistory from "../apis/getBonusHistory";



const BonusHistory = () => {
  const { showLoader, hideLoader } = useLoader();
  const [data,setData]=useState([])

  useEffect(() => {
    const loadRewards = async () => {
      
      try {
        const token = await getValue("token");
        showLoader();
        if (!token) {
          hideLoader();
          return navigation.goBack();
        }
        const res = await getBonusHistory(token);
        setData(res.data);
        hideLoader();
      } catch (error) {
        hideLoader();
        console.error(error);
      }
    };
   loadRewards();
  }, []);

  return (
    <View  style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cardContainer}>
        {
          data?.map((d,i)=><DepositBonusCard
          key={i}
          bonusID={d._id}
          date={d.date}
          amount={d.amount}
        ></DepositBonusCard>)
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
    marginTop: 20,
  },
});

export default BonusHistory;

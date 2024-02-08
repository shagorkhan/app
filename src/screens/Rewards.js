import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useLoader } from "../context/LoaderContext";
import { getValue } from "../functions/storage";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DepositBonusCard from "../components/RewardBonusCard";
import BackButton from "../components/BackButton";
import getRewards from "../apis/getRewards";



const Rewards = ({navigation}) => {
  const { showLoader, hideLoader } = useLoader();
  const [data,setData]=useState([])
  const inset=useSafeAreaInsets()

  useEffect(() => {
    const loadRewards = async () => {
      showLoader();
      try {
        const token = await getValue("token");
        if (!token) {
          hideLoader();
          return navigation.goBack();
        }
        const res = await getRewards(token);
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
    <View  style={[styles.container,{marginTop:inset?.top}]}>
      <StatusBar style={"dark"} backgroundColor={""} />
      <BackButton navigation={navigation}></BackButton>
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

export default Rewards;

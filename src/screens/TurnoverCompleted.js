import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useLoader } from "../context/LoaderContext";
import { getValue } from "../functions/storage";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DepositBonusCard from "../components/RewardBonusCard";
import BackButton from "../components/BackButton";
import getRewards from "../apis/getRewards";
import TurnoverHistoryCompletedCard from "../components/TurnoverHistoryCompletedCard";

const TurnoverCompleted = () => {
  const { showLoader, hideLoader } = useLoader();
  const [data, setData] = useState([]);
  const inset = useSafeAreaInsets();

  // useEffect(() => {
  //   const loadRewards = async () => {

  //     try {
  //       const token = await getValue("token");
  //       showLoader();
  //       if (!token) {
  //         hideLoader();
  //         return navigation.goBack();
  //       }
  //       const res = await getRewards(token);
  //       setData(res.data);
  //       hideLoader();
  //     } catch (error) {
  //       hideLoader();
  //       console.error(error);
  //     }
  //   };
  //  loadRewards();
  // }, []);

  return (
    <View style={[styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.cardContainer}
      >
        <TurnoverHistoryCompletedCard
          title="5% deposit bonus and you will win fkhjkbvuyi dhvbcduh the gam..."
          completed="COMPLETED"
          confirmation="Your bonus has added into your account"
          date="12 Jun, 2023"
        ></TurnoverHistoryCompletedCard>
        <TurnoverHistoryCompletedCard
          title="5% deposit bonus and you will win fkhjkbvuyi dhvbcduh the gam..."
          completed="COMPLETED"
          confirmation="Your bonus has added into your account"
          date="12 Jun, 2023"
        ></TurnoverHistoryCompletedCard>
        <TurnoverHistoryCompletedCard
          title="5% deposit bonus and you will win fkhjkbvuyi dhvbcduh the gam..."
          completed="COMPLETED"
          confirmation="Your bonus has added into your account"
          date="12 Jun, 2023"
        ></TurnoverHistoryCompletedCard>
        <TurnoverHistoryCompletedCard
          title="5% deposit bonus and you will win fkhjkbvuyi dhvbcduh the gam..."
          completed="COMPLETED"
          confirmation="Your bonus has added into your account"
          date="12 Jun, 2023"
        ></TurnoverHistoryCompletedCard>
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

export default TurnoverCompleted;

import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DepositHistory from "../screens/DepositHistory";
import WithdrawHistory from "../screens/WithdrawHistory";
import { View } from "react-native";
import { StatusBar } from "native-base";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

const HistoryRoutes = () => {
  const inset=useSafeAreaInsets()
  return (
    <View style={{flex:1,marginTop:inset?.top}}>
     <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <Tab.Navigator>
        <Tab.Screen name="Deposit" component={DepositHistory} />
        <Tab.Screen name="Withdraw" component={WithdrawHistory} />
      </Tab.Navigator>
    </View>
  );
};
export default HistoryRoutes;

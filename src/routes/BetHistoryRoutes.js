import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DepositHistory from "../screens/DepositHistory";
import WithdrawHistory from "../screens/WithdrawHistory";
import { View } from "react-native";
import { StatusBar } from "native-base";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import BetHistory from "../screens/BetHistory";

const Tab = createMaterialTopTabNavigator();

const BetHistoryRoutes = () => {
  const inset = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
      }}
    >
      {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((tab) => (
        <Tab.Screen key={tab} name={`Screen ${tab}`} component={BetHistory} />
      ))}
    </Tab.Navigator>
  );
};
export default BetHistoryRoutes;

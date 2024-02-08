import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TurnoverPending from "../screens/TurnoverPending";
import TurnoverCompleted from "../screens/TurnoverCompleted";

const Tab = createMaterialTopTabNavigator();

const TurnoverRoutes = () => {
  const inset=useSafeAreaInsets()
  return (
    <View style={{flex:1}}>
      <Tab.Navigator>
        <Tab.Screen name="Pending" component={TurnoverPending} />
        <Tab.Screen name="Completed" component={TurnoverCompleted} />
      </Tab.Navigator>
    </View>
  );
};
export default TurnoverRoutes;
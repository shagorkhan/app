import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Header from "../components/Header";
import DepositScreen from "../screens/DepositScreen";
import { useAuth } from "../context/AuthProvider";
import { getValue } from "../functions/storage";
import getUser from "../apis/getUser";
import { useLoader } from "../context/LoaderContext";
import HomeScreenOffline from "../screens/HomeScreenOffline";

const WithdrawScreen = () => (
  <View style={styles.container}>
    <Text>Withdraw Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Profile Screen</Text>
  </View>
);

const HistoryScreen = () => (
  <View style={styles.container}>
    <Text>History Screen</Text>
  </View>
);
// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

//const stack = createStackNavigator();

function UserRoutes(props) {
  const { user, setUser } = useAuth();
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    getUserInfo();
  }, []);
  const getUserInfo = async () => {
    showLoader();
    const token = await getValue("token");
    //console.log(token);
    if (token) {
      const res = await getUser(token);
      setUser(res.data);
      
      hideLoader();
    } else {
      hideLoader();
    }
  };

  if (!user) {
    return <HomeScreenOffline {...props} />;
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Deposit") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Withdraw") {
            iconName = focused ? "remove-circle" : "remove-circle-outline";
          } else if (route.name === "History") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          // Return the Ionicons component with the appropriate icon name
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Home tab */}
      <Tab.Screen
        options={{
          header: (props) => <Header {...props} />,
        }}
        name="Home"
        component={HomeScreen}
      />

      {/* Deposit tab */}
      <Tab.Screen name="Deposit" component={DepositScreen} />

      {/* Withdraw tab */}
      <Tab.Screen name="Withdraw" component={WithdrawScreen} />

      {/* History tab */}
      <Tab.Screen name="History" component={HistoryScreen} />

      {/* Profile tab */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default UserRoutes;

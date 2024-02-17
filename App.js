import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen1 from "./src/screens/RegisterScreen1";
import RegisterScreen2 from "./src/screens/RegisterScreen2";
import ResetPassword from "./src/screens/ResetPassword";
import OTP from "./src/screens/OTP";
import UserRoutes from "./src/routes/UserRoutes";
import getCategory from "./src/apis/getCategory";
import { getData, storeData } from "./src/functions/storage";
import { LogBox, SafeAreaView, Text } from "react-native";
import { LoaderProvider } from "./src/context/LoaderContext";
import { AuthProvider } from "./src/context/AuthProvider";
import gateGames from "./src/apis/getGames";
import GameScreen from "./src/screens/GameScreen";
import ChangePassword from "./src/screens/ChangePassword";
import ClaimVoucher from "./src/screens/ClaimVoucher";
import EditProfile from "./src/screens/EditProfile";
import Rewards from "./src/screens/Rewards";
import BankDetails from "./src/screens/BankDetails";
import BackButton from "./src/components/BackButton";
import BonusHistory from "./src/screens/BonusHistory";
import TurnoverRoutes from "./src/routes/TurnoverRoutes";
import Notification from "./src/screens/Notification";
import BetHistoryRoutes from "./src/routes/BetHistoryRoutes";
import { NativeBaseProvider } from "native-base";
LogBox.ignoreLogs([/SSRProvider/]);

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    getCategory().then((res) => {
      storeData("category", res.data);
    });
    storeGameData();
  }, []);
  const storeGameData = async () => {
    try {
      const liveRes = await gateGames(1, "live_dealers");
      await storeData("live", liveRes.data);
      const fishRes = await gateGames(2, "fish");
      await storeData("fish", fishRes.data);
      const slotRes = await gateGames(3, "novomatic");
      await storeData("slot", slotRes.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <LoaderProvider style={{flex:1}}>
          <AuthProvider style={{flex:1}}>
            <NavigationContainer style={{flex:1}}>
              <Stack.Navigator>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="HomeScreen"
                  component={UserRoutes}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Login"
                  component={LoginScreen}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Register1"
                  component={RegisterScreen1}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Register2"
                  component={RegisterScreen2}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="ResetPassword"
                  component={ResetPassword}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="OTP"
                  component={OTP}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="GameScreen"
                  component={GameScreen}
                />
                <Stack.Screen
                  options={{ header: (props) => <BackButton {...props} /> }}
                  name="ChangePass"
                  component={ChangePassword}
                />
                <Stack.Screen
                  options={{ header: (props) => <BackButton {...props} /> }}
                  name="Rewards"
                  component={Rewards}
                />
                <Stack.Screen
                  options={{ header: (props) => <BackButton {...props} /> }}
                  name="ClaimVoucher"
                  component={ClaimVoucher}
                />
                <Stack.Screen
                  options={{ header: (props) => <BackButton {...props} /> }}
                  name="TurnoverRoutes"
                  component={TurnoverRoutes}
                />
                <Stack.Screen
                  options={{ header: (props) => <BackButton {...props} /> }}
                  name="BonusHistory"
                  component={BonusHistory}
                />
                <Stack.Screen
                  options={{ header: (props) => <BackButton {...props} /> }}
                  name="BankDetails"
                  component={BankDetails}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="EditProfile"
                  component={EditProfile}
                />
                <Stack.Screen
                  options={{ header: (props) => <BackButton {...props} /> }}
                  name="Notifications"
                  component={Notification}
                />
                <Stack.Screen
                  options={{ header: (props) => <BackButton color={"#fff"} {...props} /> }}
                  name="BetHistory"
                  component={BetHistoryRoutes}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </AuthProvider>
        </LoaderProvider>
      </SafeAreaView>
      </NativeBaseProvider>
  );
}
export default App;

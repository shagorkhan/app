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
import { NativeBaseProvider, Box } from "native-base";
import { LogBox, SafeAreaView } from "react-native";
import { LoaderProvider } from "./src/context/LoaderContext";
import { AuthProvider } from "./src/context/AuthProvider";
import gateGames from "./src/apis/getGames";
import GameScreen from "./src/screens/GameScreen";
import ChangePassword from "./src/screens/ChangePassword";
import ClaimVoucher from "./src/screens/ClaimVoucher";
import EditProfile from "./src/screens/EditProfile";
LogBox.ignoreLogs([/SSRProvider/]);

const stack = createStackNavigator();

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
      storeData("live", liveRes.data);
      const fishRes = await gateGames(2, "fish");
      storeData("fish", fishRes.data);
      const slotRes = await gateGames(3, "novomatic");
      storeData("slot", slotRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NativeBaseProvider>
     <SafeAreaView style={{flex:1}}>
     <LoaderProvider>
        <AuthProvider>
          <NavigationContainer>
            <stack.Navigator initialRouteName="HomeScreen">
              <stack.Screen
                options={{ headerShown: false }}
                name="HomeScreen"
                component={UserRoutes}
              />
              <stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={LoginScreen}
              />
              <stack.Screen
                options={{ headerShown: false }}
                name="Register1"
                component={RegisterScreen1}
              />
              <stack.Screen
                options={{ headerShown: false }}
                name="Register2"
                component={RegisterScreen2}
              />
              <stack.Screen
                options={{ headerShown: false }}
                name="ResetPassword"
                component={ResetPassword}
              />
              <stack.Screen
                options={{ headerShown: false }}
                name="OTP"
                component={OTP}
              />
              <stack.Screen
                options={{ headerShown: false }}
                name="GameScreen"
                component={GameScreen}
              />
              <stack.Screen
                options={{ headerShown: false }}
                name="ChangePass"
                component={ChangePassword}
              />
              <stack.Screen
                options={{ headerShown: false }}
                name="ClaimVoucher"
                component={ClaimVoucher}
              />
              <stack.Screen
                options={{ headerShown: false }}
                name="EditProfile"
                component={EditProfile}
              />
            </stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </LoaderProvider>
     </SafeAreaView>
    </NativeBaseProvider>
  );
}
export default App;

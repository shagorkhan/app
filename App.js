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
import { LogBox } from "react-native";
import { LoaderProvider } from "./src/context/LoaderContext";
import { AuthProvider } from "./src/context/AuthProvider";
LogBox.ignoreLogs([/SSRProvider/]);

const stack = createStackNavigator();

function App() {
  useEffect(() => {
    getCategory().then((res) => {
      storeData("category", res.data);
    });
    
  }, []);

  return (
    <NativeBaseProvider>
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
            </stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </LoaderProvider>
    </NativeBaseProvider>
  );
}
export default App;

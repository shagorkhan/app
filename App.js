import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import LoginScreen from "./src/screens/LoginScreen";
//import RegisterScreen from "./src/screens/RegisterScreen";
import RegisterScreen1 from "./src/screens/RegisterScreen1";
import RegisterScreen2 from "./src/screens/RegisterScreen2";
import ResetPassword from "./src/screens/ResetPassword";
import OTP from "./src/screens/OTP";
import UserRoutes from "./src/routes/UserRoutes";
//import UserRoutes from "./src/routes/UserRoutes";



const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="HomeScreen">
        <stack.Screen options={{headerShown:false}} name="Home" component={UserRoutes} />
        <stack.Screen name="List" component={ListScreen} />
        <stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <stack.Screen options={{headerShown:false}} name="Register1" component={RegisterScreen1} />
        <stack.Screen name="Register2" component={RegisterScreen2} />
        <stack.Screen name="Resetpass" component={ResetPassword} />
        <stack.Screen name="OTPC" component={OTP} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

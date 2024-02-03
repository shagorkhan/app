import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  backgroundColor,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Logo from "../../assets/logo.svg";
import { AntDesign } from "@expo/vector-icons";
import Input from "../components/Input";
import { FontAwesome } from '@expo/vector-icons';
import Button from "../components/Button";

const ResetPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    // Add your authentication logic here
    console.log("Username:", username);
    console.log("Password:", password);
    // You can add further authentication logic and navigation
  };
  const handleRegisterButtonPress = () => {
    // Handle register button press
    console.log("Register Button pressed!");
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <Logo height={300} width={300} />
        <Text style={styles.headline}>Reset Password</Text>
        <Text style={styles.details}>
        Give your Username and Phone We {'\n'} Will send an OTP
        </Text>
        <Input style={{
          marginTop: 45,
        }} placeholder={"Username"} icon={<FontAwesome name="user-circle-o" size={24} color="#3B82F6" />}/>
        <Input style={{
          marginTop: 30,
        }} placeholder={"Phone Number"} icon={<AntDesign name="phone" size={24} color="#407BFF" />}/>

      <Button style={{marginTop: 45}} fontSize={20} buttonText="OTP"/>


      <Button style={{backgroundColor: 'black', marginTop: 15}} fontSize={20} buttonText="Back"/>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 90,
    paddingVertical: 20,
  },
  headline: {
    fontSize: 25,
  },
  details: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '300',
  },
  
});

export default ResetPassword;
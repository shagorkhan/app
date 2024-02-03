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

const LoginScreen = ({ navigation }) => {
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
    
    navigation.navigate('Register1');
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <Logo height={300} width={300} />
        <Text style={styles.headline}>Login Form</Text>
        <Text style={styles.details}>
          Login here to get extra gaming features {'\n'} and more never ended
        </Text>
        <Input style={{
          marginTop: 45,
        }} placeholder={"Username"} icon={<FontAwesome name="user-circle-o" size={24} color="#3B82F6" />}/>
        <Input style={{
          marginTop: 30,
        }} placeholder={"Password"} icon={<AntDesign name="key" size={24} color="#3B82F6" />}/>

      <Button style={{marginTop: 45}} fontSize={20} buttonText="Login"/>

      <View style={styles.line} />

      <Text style={{
        fontSize: 20,
        width: '90%',
        marginTop: 10,
      }}>Don't have an Account ?</Text>

      <Button style={{backgroundColor: 'black'}} fontSize={20} buttonText="Sign Up" onPress={handleRegisterButtonPress}/>
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
  line: {
    borderColor: 'black',
    width: '90%', // Adjust the width as needed
    borderBottomWidth: 2, // Adjust the thickness as needed
    marginTop: 40,
  },
  
});

export default LoginScreen;
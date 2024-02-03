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

const RegisterScreen2 = ({navigation}) => {
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  const handlePress = () => {
    // Add your authentication logic here
    //console.log("Username:", username);
    //console.log("Password:", password);
    // You can add further authentication logic and navigation
    navigation.navigate('');
  };
  const handleRegisterButtonPress = () => {
    // Handle register button press
    //console.log("Register Button pressed!");
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <Logo height={300} width={300} />
        <Text style={styles.headline}>Register Now</Text>
        <Input style={{
          marginTop: 45,
        }} placeholder={"Username"} icon={<FontAwesome name="user-circle-o" size={24} color="#3B82F6" />}/>
        <Input style={{
          marginTop: 30,
        }} placeholder={"Full Name"} icon={<FontAwesome name="user" size={24} color="#407BFF" />}/>
        <Input style={{
          marginTop: 30,
        }} placeholder={"Password"} icon={<AntDesign name="key" size={24} color="#3B82F6" />}/>
        <Input style={{
          marginTop: 30,
        }} placeholder={"Confirm Password"} icon={<AntDesign name="key" size={24} color="#3B82F6" />}/>

      <Button style={{marginTop: 45}} fontSize={20} buttonText="Sign Up"/>

      <View style={styles.line} />

      <Text style={{
        fontSize: 20,
        width: '90%',
        marginTop: 10,
      }}>Already have an Account ?</Text>

      <Button style={{backgroundColor: 'black'}} fontSize={20} buttonText="Login" onPress={handleRegisterButtonPress}/>
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
  line: {
    borderColor: 'black',
    width: '90%', // Adjust the width as needed
    borderBottomWidth: 2, // Adjust the thickness as needed
    marginTop: 40,
  },
  
});

export default RegisterScreen2;
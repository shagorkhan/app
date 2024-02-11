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
  Dimensions,
} from "react-native";
import Logo from "../../assets/logo.svg";
import { AntDesign } from "@expo/vector-icons";
import Input from "../components/Input";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";
const { width, height } = Dimensions.get("window");

const RegisterScreen1 = ({ navigation }) => {
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  const handlePress = () => {
    // Add your authentication logic here
    //console.log("Username:", username);
    //console.log("Password:", password);
    // You can add further authentication logic and navigation
    navigation.navigate("Register2");
  };
  const handleRegisterButtonPress = () => {
    // Handle register button press
    //console.log("Register Button pressed!");
    navigation.navigate("Login");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={styles.container}>
        <Logo height={300} width={300} />
        <Text style={styles.headline}>Register Now</Text>
        <Text style={styles.details}>
          Give your phone number also can give a {"\n"} “referral” code to get
          Bonus
        </Text>
        <Input
          style={{
            marginTop: 45,
            width:  width-50,
          }}
          placeholder={"Phone Number"}
          icon={<AntDesign name="phone" size={24} color="#407BFF" />}
        />
        <Input
          style={{
            marginTop: 30,
            width:  width-50,
          }}
          placeholder={"Referral Code  (Optional)"}
          icon={<AntDesign name="qrcode" size={24} color="#3B82F6" />}
        />

        <Button
          style={{ marginTop: 45 , width:  width-50,}}
          fontSize={20}
          buttonText="Next"
          onPress={handlePress}
        />

        <Button
          style={{ backgroundColor: "black", marginTop: 15, width:  width-50, }}
          fontSize={20}
          buttonText="Back"
          onPress={handleRegisterButtonPress}
        />
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
    textAlign: "center",
    marginTop: 10,
    fontWeight: "300",
    width:  width-50,
  },
});

export default RegisterScreen1;

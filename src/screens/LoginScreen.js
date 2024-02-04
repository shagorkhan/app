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
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";
import { useLoader } from "../context/LoaderContext";
import loginUser from "../apis/loginUser";
import { useToast } from "native-base";
import { useAuth } from "../context/AuthProvider";
import getUser from "../apis/getUser";
import { storeValue } from "../functions/storage";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { showLoader, hideLoader } = useLoader();
  const {setUser}=useAuth()
  const toast = useToast();

  const handlePress = async () => {
    try {
      showLoader();
      const res = await loginUser(username, password);
      await storeValue("token",res.data.Access_Token)
      const userRes = await getUser(res.data.Access_Token);
      //console.log(userRes.data);
      setUser(userRes.data)
      navigation.navigate("HomeScreen")
      hideLoader();
    } catch (error) {
      hideLoader();
      toast.show({
        title: "Ops!",
        variant: "solid",
        description: error.response.data.message,
        isClosable: true,
      });
    }
  };
  const handleRegisterButtonPress = () => {
    // Handle register button press

    navigation.navigate("Register1");
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <Logo height={300} width={300} />
        <Text style={styles.headline}>Login Form</Text>
        <Text style={styles.details}>
          Login here to get extra gaming features {"\n"} and more never ended
        </Text>
        <Input value={username}
          onChangeText={setUsername}
          style={{
            marginTop: 45,
          }}
          placeholder={"Username"}
          icon={<FontAwesome name="user-circle-o" size={24} color="#3B82F6" />}
        />
        <Input value={password}
          onChangeText={setPassword}
          style={{
            marginTop: 30,
          }}
          placeholder={"Password"}
          secureTextEntry={true}
          icon={<AntDesign name="key" size={24} color="#3B82F6" />}
        />

        <Button
          onPress={handlePress}
          style={{ marginTop: 45 }}
          fontSize={20}
          buttonText="Login"
        />

        <View style={styles.line} />

        <Text
          style={{
            fontSize: 20,
            width: "90%",
            marginTop: 10,
          }}
        >
          Don't have an Account ?
        </Text>

        <Button
          style={{ backgroundColor: "black" }}
          fontSize={20}
          buttonText="Sign Up"
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
  },
  line: {
    borderColor: "black",
    width: "90%", // Adjust the width as needed
    borderBottomWidth: 2, // Adjust the thickness as needed
    marginTop: 40,
  },
});

export default LoginScreen;

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

const OTP = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
  
    const handleOtpChange = (index, value) => {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      // You can perform additional logic with the OTP if needed
    };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <Logo height={300} width={300} />
        <Text style={styles.headline}>OTP</Text>
        <Text style={styles.details}>
        Give your OTP Number to verify your {'\n'} Phone Number
        </Text>
    
        <View style={styles.container2}>
            {otp.map((digit, index) => (
                    <View key={index} style={styles.roundContainer}>
                        <TextInput
                            style={styles.input}
                            maxLength={1}
                            keyboardType="numeric"
                            value={digit}
                            onChangeText={(text) => handleOtpChange(index, text)}
                        />
                    </View>
                ))}
        </View>
    
      <Button style={{marginTop: 80}} fontSize={20} buttonText="Verify"/>


      <Button style={{backgroundColor: 'black', marginTop: 15}} fontSize={20} buttonText="Cancel"/>
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
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80,
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
  roundContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 43,
    height: 43,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3B82F6',
    marginHorizontal: 10,
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
  },
  
});

export default OTP;
import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { useLoader } from "../context/LoaderContext";
import { getValue } from "../functions/storage";
import applyVoucher from "../apis/applyVoucher";

export default function ClaimVoucher({ navigation }) {
    const { showLoader, hideLoader } = useLoader();
    const [voucherCode, setVoucherCode] = useState("");
    const [message, setMessage] = useState(null);



    const handleApplyVoucher = async () => {
        setMessage(null);
        if(!voucherCode){
            showLoader();
            hideLoader();
            
        }      
        showLoader();
        try {
          const token = await getValue("token");
          if (!token) {
            hideLoader();
            return navigation.goBack();
          }
          const res = await applyVoucher(voucherCode,token);
          hideLoader();
          navigation.goBack();
          
        } catch (error) {
          hideLoader();
          setMessage(error.response.data.error);
        //   console.error(error.response.data.error);
        }
      };


  return (
    <View style={style.container}>
      <Text
        style={{
          fontSize: 46,
          alignSelf: "center",
          fontWeight: 500,
          marginTop: 60,
          color: "#000000",
        }}
      >
        Claim
      </Text>
      <Text
        style={{
          fontSize: 46,
          alignSelf: "center",
          fontWeight: 500,
          color: "#000000",
        }}
      >
        Voucher
      </Text>
      <Text
        style={{
          fontSize: 16,
          alignSelf: "center",
          fontWeight: 500,
          marginTop: 24,
          color: "#000000",
        }}
      >
        Want to get discount? Hurry up!! Claim and get discount
      </Text>
      <Input value={voucherCode} onChangeText={setVoucherCode} style={{ marginTop: 33 }} placeholder="Voucher Code"></Input>
      {
        !message || <Text
        style={{
          fontSize: 12,
          alignSelf: "center",
          fontWeight: 400,
          marginTop: 5,
          color: "red",
        }}
      >
        {message}
      </Text>
      }
      <Button onPress={handleApplyVoucher} style={{ marginTop: 33 }} buttonText='Done' ></Button>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    padding: 10,
  },
});

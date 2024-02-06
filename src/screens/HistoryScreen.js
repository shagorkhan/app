//import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";
import { useAuth } from '../context/AuthProvider';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-elements/dist/helpers';
const { width, height } = Dimensions.get("window");

const HistoryScreen= ({navigation}) => {
  const { user, setUser } = useAuth();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    // Add logic to handle the selected payment method (e.g., navigate to the next screen)
  };
  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
  };
  //console.log(user)
  if(!user){
    navigation?.navigate("Login")
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{flexDirection:'row', flexWrap:'wrap', gap:10}}>
        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'Deposit' && styles.selectedPayment]}
          onPress={() => handlePaymentSelection('Deposit')}
        >
          <Text>Deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'Withdraw' && styles.selectedPayment]}
          onPress={() => handlePaymentSelection('Withdraw')}
        >
          <Text>Withdraw</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search"
        //keyboardType="numeric"
      />

        <TouchableOpacity
        style={styles.withdrawButton}
      >
        <Text style={[styles.paymentText, {color:'white'}]}>Withdraw</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  title: {
    fontSize: 14,
    //fontWeight: 'bold',
    marginBottom: 5,
  },
  paymentOption: {
    backgroundColor: '#e0e0e0',
    //padding: 10,
    //marginHorizontal: 5,
    //width: 80,
    //height: 50,
    alignItems: 'center',
    borderRadius: 10,
  },
  paymentOption2: {
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    borderRadius: 10,
    //marginRight:'80%',
    width:100,
    padding:10,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedPayment: {
   // backgroundColor: 'blue', // Change the color for the selected payment method
    borderColor: '#3B82F6',
    borderWidth:2,
  },
  paymentLogo: {
    width:width/4-22,
    height: 50,
    //marginBottom: 10,
    borderRadius:10,
  },
  amountContainer: {
    //alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
   // justifyContent: 'space-around',
    gap:5,
    rowGap:1,
    marginBottom: 10,
    flexWrap:"wrap",

  },
  amountOption: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    width: 100,
    alignItems: 'center',
    borderRadius: 7,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedAmount: {
    backgroundColor: '#3B82F6',
    borderColor: 'white',
  },
  withdrawButton: {
    backgroundColor: '#3B82F6',
    padding: 10,
    //marginHorizontal: 30,
    //width: "100%",
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginTop:20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default HistoryScreen;

//import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";
import { useAuth } from '../context/AuthProvider';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-elements/dist/helpers';
const { width, height } = Dimensions.get("window");

const WithdrawScreen= ({navigation}) => {
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
      <Text style={{fontSize:35, textAlign:'center', marginBottom:15}}>Withdraw</Text>
      <Text style={{fontSize:13, textAlign:'center'}}>With your tasted wallet and explore more</Text>
      <Text style={{fontSize:13, textAlign:'center', marginBottom:25}}>gaming features with our  client area</Text>
      <Text style={styles.title}>Select Withdraw Method</Text>
      <View style={{flexDirection:'row', flexWrap:'wrap', gap:10}}>
        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'bKash' && styles.selectedPayment]}
          onPress={() => handlePaymentSelection('bKash')}
        >
          <Image
              source={{ uri: 'https://seeklogo.com/images/B/bkash-logo-835789094A-seeklogo.com.png' }}
              style={styles.paymentLogo}
            />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'Nagad' && styles.selectedPayment]}
          onPress={() => handlePaymentSelection('Nagad')}
        >
          <Image
              source={{ uri: 'https://nagad.com.bd/_nuxt/img/new-logo.6e48f4e.png' }}
              style={styles.paymentLogo}
            />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'Rocket' && styles.selectedPayment]}
          onPress={() => handlePaymentSelection('Rocket')}
        >
          <Image
              source={{ uri: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png' }}
              style={styles.paymentLogo}/>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, selectedPayment === 'UPay' && styles.selectedPayment]}
          onPress={() => handlePaymentSelection('UPay')}
        >
          <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3sBaDydxE2z4w90aXRukdF0xFB4zTbASNWI3AGyZiM1SqkPipn8ggq7yvNaWckt36qs&usqp=CAU' }}
              style={styles.paymentLogo}/>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:14, marginTop:20, marginBottom:5,}}>Deposit Channel</Text>
      <TouchableOpacity
        style={[styles.paymentOption2, selectedPayment === 'Dpay' && styles.selectedPayment]}
       // onPress={() => handlePaymentSelection('Dpay')}
      >
        <Text style={styles.paymentText}>Dpay</Text>
      </TouchableOpacity>
      <Text style={{fontSize:14, marginTop:20}}>Amount  200 Taka- 25,000 Taka </Text>
      <View style={styles.amountContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 200 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(200)}
          >
            <Text style={[styles.amountText, {color:selectedAmount === 200 ?'white':'black'}]}>200</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 500 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(500)}
          >
            <Text style={[styles.amountText, {color:selectedAmount === 500 ?'white':'black'}]}>500</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 1000 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(1000)}
          >
            <Text style={[styles.amountText, {color:selectedAmount === 1000 ?'white':'black'}]}>1,000</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 5000 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(5000)}
          >
            <Text style={[styles.amountText, {color:selectedAmount === 5000 ?'white':'black'}]}>5,000</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 10000 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(10000)}
          >
            <Text style={[styles.amountText, {color:selectedAmount === 10000 ?'white':'black'}]}>10,000</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 20000 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(20000)}
          >
            <Text style={[styles.amountText, {color:selectedAmount === 20000 ?'white':'black'}]}>20,000</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
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
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default WithdrawScreen;

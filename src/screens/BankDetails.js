import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";
import { useAuth } from '../context/AuthProvider';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-elements/dist/helpers';
import Input from '../components/Input';
const { width, height } = Dimensions.get("window");

const BankDetails = ({navigation}) => {
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
      <Text style={{fontSize:35, textAlign:'center', marginBottom:15}}>Deposit</Text>
      <Text style={{fontSize:13, textAlign:'center'}}>With your tasted wallet and explore more</Text>
      <Text style={{fontSize:13, textAlign:'center', marginBottom:25}}>gaming features with our  client area</Text>
      <Text style={styles.title}>Select Payment Method</Text>
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
      
      <Input
          style={{
            marginTop: 30,
          }}
          placeholder={"Wallet Number"}
          secureTextEntry={true}
        />

        <TouchableOpacity
        style={styles.depositButton}
      >
        <Text style={[styles.paymentText, {color:'white'}]}>Add</Text>
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
  depositButton: {
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

export default BankDetails;
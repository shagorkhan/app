//import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";

const DepositScreen = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    // Add logic to handle the selected payment method (e.g., navigate to the next screen)
  };
  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
  };

  return (
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
            source={{ uri: 'https://www.newagebd.com/files/records/news/202204/167148_130.jpg' }}
            style={styles.paymentLogo}
          />
        <Text style={styles.paymentText}>Rocket</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'UPay' && styles.selectedPayment]}
        onPress={() => handlePaymentSelection('UPay')}
      >
        <Image
            source={{ uri: 'https://www.newagebd.com/files/records/news/202204/167148_130.jpg' }}
            style={styles.paymentLogo}
          />
        <Text style={styles.paymentText}>UPay</Text>
      </TouchableOpacity>
      </View>
      <Text style={{fontSize:14, marginTop:20, marginBottom:5,}}>Deposit Channel</Text>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'Dpay' && styles.selectedPayment]}
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
            <Text style={styles.amountText}>200</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 500 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(500)}
          >
            <Text style={styles.amountText}>500</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 1000 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(1000)}
          >
            <Text style={styles.amountText}>1,000</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 2000 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(2000)}
          >
            <Text style={styles.amountText}>5,000</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 5000 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(5000)}
          >
            <Text style={styles.amountText}>10,000</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === 10000 && styles.selectedAmount]}
            onPress={() => handleAmountSelection(10000)}
          >
            <Text style={styles.amountText}>20,000</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{fontSize:14}}>Deposit Bonus </Text>

      <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => {}}>
          <Select.Item label="No Bonus" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>

        <TouchableOpacity
        style={styles.depositButton}
      >
        <Text style={styles.paymentText}>Deposit</Text>
      </TouchableOpacity>
        
    </View>
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
    padding: 10,
    //marginHorizontal: 5,
    width: 80,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedPayment: {
    backgroundColor: 'blue', // Change the color for the selected payment method
    borderColor: 'white',
  },
  paymentLogo: {
    width: 80,
    height: 30,
    //marginBottom: 10,
  },
  amountContainer: {
    //alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    backgroundColor: 'blue',
    borderColor: 'white',
  },
  depositButton: {
    backgroundColor: '#39BB0C',
    padding: 10,
    marginHorizontal: 30,
    //width: "100%",
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginTop:20,
  },
});

export default DepositScreen;

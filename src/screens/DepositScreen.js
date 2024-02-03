//import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

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
      <Text style={{fontSize:40, textAlign:'center', marginBottom:20}}>Deposit</Text>
      <Text style={{fontSize:15, textAlign:'center'}}>With your tasted wallet and explore more</Text>
      <Text style={{fontSize:15, textAlign:'center', marginBottom:40}}>gaming features with our  client area</Text>
      <Text style={styles.title}>Select Payment Method</Text>
      <View>
      <ScrollView horizontal={true}>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'bKash' && styles.selectedPayment]}
        onPress={() => handlePaymentSelection('bKash')}
      >
        <Text style={styles.paymentText}>bKash</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'Nagad' && styles.selectedPayment]}
        onPress={() => handlePaymentSelection('Nagad')}
      >
        <Text style={styles.paymentText}>Nagad</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'Rocket' && styles.selectedPayment]}
        onPress={() => handlePaymentSelection('Rocket')}
      >
        <Text style={styles.paymentText}>Rocket</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'UPay' && styles.selectedPayment]}
        onPress={() => handlePaymentSelection('UPay')}
      >
        <Text style={styles.paymentText}>UPay</Text>
      </TouchableOpacity>
      </ScrollView>
      </View>
      <Text style={{fontSize:15}}>Deposit Channel</Text>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'Dpay' && styles.selectedPayment]}
       // onPress={() => handlePaymentSelection('Dpay')}
      >
        <Text style={styles.paymentText}>Dpay</Text>
      </TouchableOpacity>
      <Text style={{fontSize:15}}>Amount  200 Taka- 25,000 Taka </Text>
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
      <Text style={{fontSize:15}}>Deposit Bonus </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paymentOption: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginHorizontal: 5,
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
  amountContainer: {
    alignItems: 'center',
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
});

export default DepositScreen;

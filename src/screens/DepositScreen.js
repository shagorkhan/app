import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    // Add logic to handle the selected payment method (e.g., navigate to the next screen)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Method</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentOption: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    marginVertical: 10,
    width: 200,
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
});

export default PaymentScreen;

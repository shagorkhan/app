
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DepositHistory = () => {
  return (
    <View style={styles.container}>
      <Text>Deposit History</Text>
      {/* Add your deposit history components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DepositHistory;
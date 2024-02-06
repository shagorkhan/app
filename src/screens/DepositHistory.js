
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Depositewithdrawcard from '../components/DepositeWithdrawCard';

const DepositHistory = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Search..."></Input>
      <View style={styles.cardContainer}>      
        <Depositewithdrawcard></Depositewithdrawcard>
        <Depositewithdrawcard></Depositewithdrawcard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  cardContainer:{
    marginTop:20
  }
});

export default DepositHistory;
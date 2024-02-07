
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Depositewithdrawcard from '../components/DepositeWithdrawCard';
import img1 from "../../assets/image12.png";


const DepositHistory = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Search..."></Input>
      <View style={styles.cardContainer}>      
        <Depositewithdrawcard  
        tnxId='dhjgwycikj87'
        status='CANCELED'
        amount='500'
        offer="100"
        remark="Thank you"
        date="12 Jan 2000"
        icon={img1}
        walletName="Bkash"
        ></Depositewithdrawcard>
        
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
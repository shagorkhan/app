import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from '../components/Input';
import BackButton from '../components/BackButton';


export default function ClaimVoucher({navigation}) {
  return (
    <View style={style.container}>
        <BackButton navigation={navigation}></BackButton>
      <Text style={{fontSize:35,alignSelf:'center', marginTop:60}}>Claim Voucher</Text>
      
      

    </View>
  )
}
const style= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#D9D9D9',
        padding:10,
    }

});
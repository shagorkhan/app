import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from '../components/Input';


export default function ChangePassword() {
  return (
    <View style={style.container}>
      <Text style={{fontSize:35,alignSelf:'center', marginTop:60}}>Change</Text>
      <Text style={{fontSize:35,alignSelf:'center'}}>Password</Text>
      <Text style={{fontSize:13,alignSelf:'center',marginTop:10}}>Password is secure  to the user.</Text>
      <Text style={{fontSize:13,alignSelf:'center'}}> Please give information to complete</Text>
      <Input/>
      <Input/>
      <Input/>

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
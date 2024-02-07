import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import { StatusBar } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


export default function ChangePassword() {

  return (
    
    <View style={style.container}>
      <ScrollView>
      <StatusBar backgroundColor={'#D9D9D9'}></StatusBar>
      <Text style={{fontSize:35,alignSelf:'center', marginTop:60}}>Change</Text>
      <Text style={{fontSize:35,alignSelf:'center'}}>Password</Text>
      <Text style={{fontSize:13,alignSelf:'center',marginTop:10}}>Password is secure  to the user.</Text>
      <Text style={{fontSize:13,alignSelf:'center'}}> Please give information to complete</Text>
      
      <Input
          
          style={{
            marginTop: 40,
          }}
          placeholder={"Current Password"}
        />
        <Input
          
          style={{
            marginTop: 25,
          }}
          placeholder={"New Password"}
        />
        <Input
          
          style={{
            marginTop: 25,
          }}
          placeholder={"Confirm Password"}
        />
        <Button
          //onPress={handlePress}
          style={{ marginTop: 45,alignSelf:'center' }}
          fontSize={20}
          buttonText="Done"
        />
        </ScrollView>

    </View>
    
  )
}
const style= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#D9D9D9',
        padding:15,
    }

});
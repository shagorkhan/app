import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'


export default function Input({placeholder,style,icon}) {
  return (
    <View style={[styles.input,style]}>
      {icon}
        <TextInput 
        style={{
          fontSize:18,
          marginLeft:10,
          flex: 1,
        }} 
        placeholder={placeholder}
        />
      
    </View>
    
  )
}
const styles=StyleSheet.create({
  input:{
    borderWidth: 1,
    borderColor: '#3B82F6',
    width: '100%',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 9,
    flexDirection:'row',

  }
})
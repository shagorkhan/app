import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'


export default function Input({placeholder,style,icon,onChangeText,secureTextEntry,value}) {
  return (
    <View style={[styles.input,style]}>
      {icon}
        <TextInput value={value} onChangeText={onChangeText}
        style={{
          fontSize:18,
          marginLeft:10,
          flex: 1,
        }} 
        secureTextEntry={secureTextEntry}
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
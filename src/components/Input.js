import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'


export default function Input({placeholder,style,icon,onChangeText,secureTextEntry,value,keyboardType}) {
  return (
    <View style={[styles.input,style]}>
      {icon?icon:null}
        <TextInput value={value} onChangeText={onChangeText}
        style={{
          fontSize:16,
          marginLeft:10,
          flex: 1,
        }} 
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        keyboardType={keyboardType}
        />
      
    </View>
    
  )
}
const styles=StyleSheet.create({
  input:{
    borderWidth: 1,
    borderColor: '#3B82F6',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection:'row',
    alignItems:"center"

  }
})
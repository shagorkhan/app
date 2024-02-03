import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({buttonText, style, fontSize,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}
        style={[styles.buttonStyle,style]}
      >
      <Text style={{ color: 'white', fontSize: fontSize }}>{buttonText}</Text>
    </TouchableOpacity>
    
    
  )
}
const styles=StyleSheet.create({
    buttonStyle:{
        backgroundColor: 'blue', // Blue color
        padding: 12,
        borderRadius: 25,
        alignItems: 'center',
        margin: 10,
        width: '100%',
    }
  })
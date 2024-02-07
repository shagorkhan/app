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
        backgroundColor: '#3B82F6', // Blue color
        padding: 8,
        borderRadius: 25,
        alignItems: 'center',
        width: '100%',
    }
  })
import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function BackButton({navigation}) {
  return (
    <TouchableOpacity onPress={()=>navigation?.goBack()}>
        <View style={{display:'flex', flexDirection:'row',alignItems:'center', gap:10}}>
        <AntDesign name="left" size={16} color="#407BFF" />
        <Text style={{ color: '#407BFF', fontSize: 16 }}>Back</Text>
        </View>
   
    </TouchableOpacity>
    
    
  )
}
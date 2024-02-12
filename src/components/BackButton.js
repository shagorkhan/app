import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
export default function BackButton({navigation,color}) {
  const inset=useSafeAreaInsets()
  return (
    <TouchableOpacity style={{marginTop:inset?.top,paddingHorizontal:20,backgroundColor:"#fff"}} onPress={()=>navigation?.goBack()}>
       <StatusBar style={"dark"} backgroundColor={"#fff"} />
        <View style={{display:'flex', flexDirection:'row',alignItems:'center', gap:10}}>
        <AntDesign name="left" size={16} color="#407BFF" />
        <Text style={{ color: '#407BFF', fontSize: 16 }}>Back</Text>
        </View>
   
    </TouchableOpacity>
    
    
  )
}
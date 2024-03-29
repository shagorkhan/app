import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../context/AuthProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {TurnoverRoutes} from '../routes/TurnoverRoutes';

const ProfileScreen = ({ navigation }) => {
  const inset = useSafeAreaInsets();
  const {user}=useAuth()
  const handleMenuPress = (menu) => {
    
      navigation.navigate(menu);
    
  };
 // console.log(user)

  return (
   <SafeAreaView style={{flex:1,marginTop:inset.top}}>
    <StatusBar style={"light"} backgroundColor={'rgba(64, 123, 255, 0.87)'}/>
     <ImageBackground source={require('../../assets/imagebackground.png')} style={styles.background}>
      {/* 

      </StatusBar> */}
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'white', fontSize:16}}>{user?.name}</Text> 
            <TouchableOpacity onPress={()=>{
              navigation?.navigate("EditProfile")
            }}><Feather name="edit" size={20} color="white"/></TouchableOpacity>
          </View>
        <Text style={{color:'white', fontSize:15}}>{user?.username}</Text>
        <Text style={{color:'white'}}>+{user?.phone}</Text>
        <Text style={{color:'white',fontWeight:"700"}}>{user?.balance.toFixed(2)}BDT</Text>
        <Text style={{color:'white',fontSize:18,marginTop:30,marginBottom:15,borderBottomWidth: 1.5, borderColor: '#FFFFFF',}}>Menus</Text>
        <TouchableOpacity onPress={() => handleMenuPress('ChangePass')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="key-outline" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Change Password</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleMenuPress('BetHistory')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="history" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Bet History</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleMenuPress('TurnoverRoutes')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="history" size={24} color="black" />   
            <Text style={{marginLeft:15, fontSize:18}}>Turnover History</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('BankDetails')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="bank" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Bank details</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Notifications')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialIcons name="notifications-none" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Notifications</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Rewards')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}> 
            <MaterialCommunityIcons name="gift-outline" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Rewards</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('ClaimVoucher')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialIcons name="wallet-giftcard" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Claim Voucher</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('BonusHistory')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
           <AntDesign name="gift" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Bonus</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    </ImageBackground>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    paddingHorizontal:15,
    //padding:15,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    marginTop:10,
    color:'#FFFFFF',
    alignSelf:'flex-end',
  },
  menuItem: {
    flexDirection:'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor:'#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'space-between',
    //allignItems: 'center',
  },
});

export default ProfileScreen;

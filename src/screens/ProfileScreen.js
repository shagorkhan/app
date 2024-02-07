import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';




const ProfileScreen = ({ navigation }) => {
  const handleMenuPress = (menu) => {
    // Navigate or perform actions based on the selected menu
    // For example:
    if (menu === 'Edit Profile') {
      navigation.navigate('EditProfile');
    } else if (menu === 'Logout') {
      // Perform logout logic
    }
  };

  return (
    <ImageBackground source={require('../../assets/imagebackground.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'white', fontSize:16}}>Md Sazzad Hossain</Text> 
            <TouchableOpacity><Feather name="edit" size={20} color="white"/></TouchableOpacity>
          </View>
        <Text style={{color:'white', fontSize:15}}>sazzad9911</Text>
        <Text style={{color:'white'}}>+8801761143991</Text>
        <Text style={{color:'white',fontSize:18,marginTop:30,marginBottom:15,borderBottomWidth: 1.5, borderColor: '#FFFFFF',}}>Menus</Text>
        <TouchableOpacity onPress={() => handleMenuPress('Edit Profile')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="key-outline" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Change Password</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleMenuPress('Change Password')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="history" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Bet History</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleMenuPress('Logout')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="history" size={24} color="black" />   
            <Text style={{marginLeft:15, fontSize:18}}>Turnover History</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Logout')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="bank" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Bank details</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Logout')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialIcons name="notifications-none" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Notifications</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Logout')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}> 
            <MaterialCommunityIcons name="gift-outline" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Rewards</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Logout')} style={styles.menuItem}>
          <View style={{flexDirection:'row'}}>
            <MaterialIcons name="wallet-giftcard" size={24} color="black" />
            <Text style={{marginLeft:15, fontSize:18}}>Claim Voucher</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
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

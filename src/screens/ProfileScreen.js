import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




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
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={{justifyContent:'space-between',}}>Md Sazzad Hossain <Feather name="edit" size={24} color="black" /></Text>
      
      <TouchableOpacity onPress={() => handleMenuPress('Edit Profile')} style={styles.menuItem}>
        <MaterialCommunityIcons name="key-outline" size={24} color="black" />
        <Text>Change Password</Text>
        <SimpleLineIcons name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => handleMenuPress('Change Password')} style={styles.menuItem}>
        <MaterialCommunityIcons name="history" size={24} color="black" />
        <Text>Bet History</Text>
        <SimpleLineIcons name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => handleMenuPress('Logout')} style={styles.menuItem}>
        <MaterialCommunityIcons name="history" size={24} color="black" />   
        <Text>Turnover History</Text>
        <SimpleLineIcons name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenuPress('Logout')} style={styles.menuItem}>
        <MaterialCommunityIcons name="bank" size={24} color="black" />
        <Text>Bank details</Text>
        <SimpleLineIcons name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenuPress('Logout')} style={styles.menuItem}>
        <MaterialIcons name="notifications-none" size={24} color="black" />
        <Text>Notifications</Text>
        <SimpleLineIcons name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenuPress('Logout')} style={styles.menuItem}>
        <MaterialCommunityIcons name="gift-outline" size={24} color="black" />
        <Text>Rewards</Text>
        <SimpleLineIcons name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenuPress('Logout')} style={styles.menuItem}>
        <MaterialIcons name="wallet-giftcard" size={24} color="black" />
        <Text>Claim Voucher</Text>
        <SimpleLineIcons name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf:'flex-end',
  },
  menuItem: {
    flexDirection:'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'space-between',
    //allignItems: 'center',
  },
});

export default ProfileScreen;

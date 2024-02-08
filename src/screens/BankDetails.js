import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";
import { useAuth } from '../context/AuthProvider';
import { FontAwesome } from '@expo/vector-icons';
import Input from '../components/Input';
import Button from '../components/Button';
const { width, height } = Dimensions.get("window");

const BankDetails = ({navigation}) => {
  const { user, setUser } = useAuth();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    // Add logic to handle the selected payment method (e.g., navigate to the next screen)
  };

  //console.log(user)
  if(!user){ 
    navigation?.navigate("Login")
  }

  return (
    <ScrollView style={{backgroundColor:'#D9D9D9'}}>
    <View style={styles.container}>
        <Text style={{fontSize:22,marginTop:20,marginBottom:10}}>Your Account</Text>
        
            <View style={{flexDirection:'row'}}>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:'row', gap:10}}>
                        <View style={styles.accountBox}>
                            <Image
                                source={{ uri: 'https://seeklogo.com/images/B/bkash-logo-835789094A-seeklogo.com.png' }}
                                style={styles.accountLogo}
                            />
                            <Text style={{fontSize:14}}>bkash</Text>
                            <TouchableOpacity>
                                <FontAwesome name="edit" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.accountBox}>
                            <Image
                                source={{ uri: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png' }}
                                style={styles.accountLogo}
                            />
                            <Text style={{fontSize:14}}>Rocket</Text>
                            <TouchableOpacity>
                                <FontAwesome name="edit" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.accountBox}>
                            <Image
                                source={{ uri: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png' }}
                                style={styles.accountLogo}
                            />
                            <Text style={{fontSize:14}}>Rocket</Text>
                            <TouchableOpacity>
                                <FontAwesome name="edit" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.accountBox}>
                            <Image
                                source={{ uri: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png' }}
                                style={styles.accountLogo}
                            />
                            <Text style={{fontSize:14}}>Rocket</Text>
                            <TouchableOpacity>
                                <FontAwesome name="edit" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.accountBox}>
                            <Image
                                source={{ uri: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png' }}
                                style={styles.accountLogo}
                            />
                            <Text style={{fontSize:14}}>Rocket</Text>
                            <TouchableOpacity>
                                <FontAwesome name="edit" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.accountBox}>
                            <Image
                                source={{ uri: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png' }}
                                style={styles.accountLogo}
                            />
                            <Text style={{fontSize:14}}>Rocket</Text>
                            <TouchableOpacity>
                                <FontAwesome name="edit" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
       
    
      <Text style={{fontSize:22,marginTop:35}}>Add Bank details</Text>
      <Text style={{fontSize:13, color:'red',marginBottom:10}}>Select a wallet to add-</Text>
      <View style={{flexDirection:'row', flexWrap:'wrap', gap:10}}>
        <TouchableOpacity
            style={[styles.paymentOption, selectedPayment === 'bKash' && styles.selectedPayment]}
            onPress={() => handlePaymentSelection('bKash')}
        >
            <Image
                source={{ uri: 'https://seeklogo.com/images/B/bkash-logo-835789094A-seeklogo.com.png' }}
                style={styles.paymentLogo}
            />
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.paymentOption, selectedPayment === 'Nagad' && styles.selectedPayment]}
            onPress={() => handlePaymentSelection('Nagad')}
        >
            <Image
                source={{ uri: 'https://nagad.com.bd/_nuxt/img/new-logo.6e48f4e.png' }}
                style={styles.paymentLogo}
            />
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.paymentOption, selectedPayment === 'Rocket' && styles.selectedPayment]}
            onPress={() => handlePaymentSelection('Rocket')}
        >
            <Image
                source={{ uri: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png' }}
                style={styles.paymentLogo}/>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.paymentOption, selectedPayment === 'UPay' && styles.selectedPayment]}
            onPress={() => handlePaymentSelection('UPay')}
        >
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3sBaDydxE2z4w90aXRukdF0xFB4zTbASNWI3AGyZiM1SqkPipn8ggq7yvNaWckt36qs&usqp=CAU' }}
                style={styles.paymentLogo}/>
        </TouchableOpacity>
      </View>
      
      <Input
          style={{
            marginTop: 35,
          }}
          placeholder={"Wallet Number"}
          secureTextEntry={true}
        />

        <Button
            style={{ marginTop: 45 }}
            fontSize={16}
            buttonText="Add"
        />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  title: {
    fontSize: 14,
    //fontWeight: 'bold',
    marginBottom: 5,
  },
  paymentOption: {
    backgroundColor: '#e0e0e0',
    //padding: 10,
    //marginHorizontal: 5,
    //width: 80,
    //height: 50,
    alignItems: 'center',
    borderRadius: 10,
  },
  paymentOption2: {
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    borderRadius: 10,
    //marginRight:'80%',
    width:100,
    padding:10,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedPayment: {
   // backgroundColor: 'blue', // Change the color for the selected payment method
    borderColor: '#3B82F6',
    borderWidth:2,
  },
  paymentLogo: {
    width:width/4-22,
    height: 50,
    //marginBottom: 10,
    borderRadius:10,
  },
  accountLogo: {
    width:40,
    height: 40,
  },
  input: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  accountBox:{
    width:160,
    height:45,
    borderColor: 'gray',
    borderWidth: .5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,

  },
});

export default BankDetails;
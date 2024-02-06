
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Input from '../components/Input';

const DepositHistory = () => {
  return (
    <View style={styles.container}>
      <Input 
          style={{
            marginTop: 10,
          }}
          placeholder={"Search"}
        />
        <ScrollView>
          <View>
            
          </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
});

export default DepositHistory;
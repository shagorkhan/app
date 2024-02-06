import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DepositHistory from '../screens/DepositHistory';
import WithdrawHistory from '../screens/WithdrawHistory';

const Tab = createMaterialTopTabNavigator();

const HistoryRoutes = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Deposit" component={DepositHistory} />
        <Tab.Screen name="Withdraw" component={WithdrawHistory} />
      </Tab.Navigator>
  );};
export default HistoryRoutes;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import DateTimePickerCommunity from '../screens/DateTimeScreenCommunity';
import DateTimePickerModal from '../screens/DateTimeScreenModal';
import SettingsScreen from '../screens/SettingsScreen.js';

const Stack = createStackNavigator();
export default HomeStack = () => (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Card' component={CardScreen} />
    <Stack.Screen name='DateTimeC' component={DateTimePickerCommunity} />
    <Stack.Screen name='DateTimeM' component={DateTimePickerModal} />
    <Stack.Screen name='Settings' component={SettingsScreen} />
  </Stack.Navigator>
);


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import RNCSegmentedControlScreen from '../screens/RNCSegmentedContolScreen';
import DateTimePickerCommunity from '../screens/DateTimeScreenCommunity';
import DateTimePickerModal from '../screens/DateTimeScreenModal';
import TableScreen from '../screens/TableScreen';
import ModalScreen from '../screens/ModalScreen';
import SettingsScreen from '../screens/SettingsScreen.js';
import KeybordAvoidScreen from '../screens/KeybordAvoidScreen.js';
const Stack = createStackNavigator();
export default HomeStack = () => (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Card' component={CardScreen} />
    <Stack.Screen name='RNCSegmented' component={RNCSegmentedControlScreen} />
    <Stack.Screen name='DateTimeC' component={DateTimePickerCommunity} />
    <Stack.Screen name='DateTimeM' component={DateTimePickerModal} />
    <Stack.Screen name='Table' component={TableScreen} />
    <Stack.Screen name='Modal' component={ModalScreen} />
    <Stack.Screen name='KeybordAvoid' component={KeybordAvoidScreen} />
    <Stack.Screen name='Settings' component={SettingsScreen} />
  </Stack.Navigator>
);


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

import SettingsScreen from '../screens/SettingsScreen.js';

const Stack = createStackNavigator();
export default HomeStack = () => (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={HomeScreen} />

    <Stack.Screen name='Settings' component={SettingsScreen} />
  </Stack.Navigator>
);


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeStack from './HomeStack';
import IntroScreen from '../screens/IntroScreen';

const Stack = createStackNavigator();
export default RootStack = () => (
  <Stack.Navigator initialRouteName='Intro' headerMode='none'>
    <Stack.Screen name='Intro' component={IntroScreen} />
    <Stack.Screen name='Home' component={HomeStack} />
  </Stack.Navigator>
);


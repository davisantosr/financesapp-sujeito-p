import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View } from 'react-native';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name={'Home'} component={Home}/>
    </AppStack.Navigator>
  )
}

export default AppRoutes;

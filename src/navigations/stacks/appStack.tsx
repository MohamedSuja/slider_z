import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@/screens/home';
import {AppStackParamList} from '../navigation_models/appStackModel';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;

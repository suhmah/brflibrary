import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { RouteName } from './RouteName';

const Stack = createNativeStackNavigator();

const BooksRoute = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={RouteName.HOME} component={Home} />
  </Stack.Navigator>
);

export default BooksRoute;

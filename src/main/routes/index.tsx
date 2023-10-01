/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BooksRoute from '@/modules/Books/presentation/routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomLabelNavigation,
  baseColor,
  images,
  metric,
} from '@/brfLibrary_ui';
import ProfileRoute from '@/modules/Profile/presentation/routes';
import { RouteName } from './RouteName';

const Tab = createBottomTabNavigator();

const PublicStack = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: baseColor.lightBlue500,
          borderTopStartRadius: metric(12),
          borderTopEndRadius: metric(12),
          padding: 0,
          paddingHorizontal: metric(60),
          height: metric(100),
          paddingBottom: metric(33),
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => null,
          tabBarLabel: ({ focused }) => (
            <BottomLabelNavigation focused={focused} path={images.book} />
          ),
        }}
        name={RouteName.HOME}
        component={BooksRoute}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => null,
          tabBarLabel: ({ focused }) => (
            <BottomLabelNavigation focused={focused} path={images.menu} />
          ),
        }}
        name={RouteName.PROFILE}
        component={ProfileRoute}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default PublicStack;

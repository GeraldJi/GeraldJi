import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#8bbeb2',
        },
        headerTintColor: '#fff',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => (
            <Ionicons.Button
              name="ios-menu"
              size={25}
              backgroundColor="#8bbeb2"
              onPress={() => navigation.openDrawer()}></Ionicons.Button>
          ),
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default HomeStack;

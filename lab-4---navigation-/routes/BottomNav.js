import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import Task from '../screens/Task';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
          inactiveTintColor: "#ccc",
          activeTintColor: '#fff',
          style: {
            backgroundColor: '#8bbeb2',
          }
        }} > 
      <Tab.Screen name="Home" component={HomeStack} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
              name="md-home"
              size={size}
              color={focused ? '#fff' : '#ccc'}
            />
            ),
          }}
      />
       <Tab.Screen name="Task" component={Task} 
        options={{
            tabBarLabel: 'Task',
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
              name='ios-add-circle'
              size={size}
              color={focused ? '#fff' : '#ccc'}
            />
            ),
          }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigator;


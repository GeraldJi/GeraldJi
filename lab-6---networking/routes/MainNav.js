import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import AboutStack from './AboutStack';
import BottomNav from './BottomNav';
import CustomDrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={BottomNav}
          options={{
            title: 'Home',
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutStack}
          options={{
            title: 'About',
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-book"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

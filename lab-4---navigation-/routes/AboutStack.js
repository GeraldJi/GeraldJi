import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import About from '../screens/About';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const AboutStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8bbeb2",
        },
        headerTintColor: "#fff",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="About" component={About} 
      options={{
        title:'About',
        headerLeft: () => (
            <Ionicons.Button name="ios-arrow-back-outline" size={25} backgroundColor="#8bbeb2" onPress={() => navigation.navigate('Home')}></Ionicons.Button>
        )
        }}
      />
    </Stack.Navigator>
  );
}

export default AboutStack;
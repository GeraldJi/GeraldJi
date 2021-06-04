import React from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import { Avatar, Drawer, Title, Caption } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { globalStyles } from '../styles/globalStyles';
const CustomDrawerContent = (props) => {
  return (
    <View style={globalStyles.drawerContainer}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <View style={globalStyles.drawerheader}>
            <Avatar.Image
              source={{
                uri:
                  'https://www.pngkit.com/png/detail/25-258694_cool-avatar-transparent-image-cool-boy-avatar.png',
              }}
              size={50}
            />
            <View style={globalStyles.drawerMainTitle}>
              <Title style={globalStyles.drawertitle}>Laboratory 6</Title>
              <Caption style={globalStyles.drawercaption}>@bscs3-3</Caption>
            </View>
          </View>
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItemList
            {...props}
            activeBackgroundColor={'#597A7A'}
            activeTintColor={'#3aa'}
            inactiveTintColor={'#ccc'}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section></Drawer.Section>
      <DrawerItem
        inactiveTintColor={'#fff'}
        icon={({ color, size }) => (
          <MaterialCommunityIcons
            name="exit-to-app"
            size={size}
            color={color}
          />
        )}
        label="Close"
        onPress={() => {
          BackHandler.exitApp();
        }}
      />
    </View>
  );
};


export default CustomDrawerContent;

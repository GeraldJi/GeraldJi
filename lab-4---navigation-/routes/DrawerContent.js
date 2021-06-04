import * as React from 'react';
import { View, Text, Button, StyleSheet, BackHandler } from 'react-native';
import { Avatar, Drawer, Title, Caption } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { DrawerContentScrollView,  DrawerItemList,  DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent  = (props) => {
  const [active, setActive] = React.useState('');
  return (
    <View style={{flex:1, backgroundColor: '#8bb'}}>
    <DrawerContentScrollView {...props}>
      <Drawer.Section>
        <View style={styles.header}>
          <Avatar.Image 
              source={{
                  uri: 'https://www.pngkit.com/png/detail/25-258694_cool-avatar-transparent-image-cool-boy-avatar.png'
              }}
              size={50}
          /> 
          <View style={{marginLeft:15, flexDirection:'column'}}>
              <Title style={styles.title}>Laboratory4</Title>
              <Caption style={styles.caption}>@bscs3-3</Caption>
          </View>
        </View>
      </Drawer.Section>
    <Drawer.Section>
      <DrawerItemList {...props} 
        activeBackgroundColor={"#597A7A"}
        activeTintColor={"#3aa"}
        inactiveTintColor={ "#ccc" }
      />
    </Drawer.Section>
    </DrawerContentScrollView>
    <Drawer.Section></Drawer.Section>
    <DrawerItem   
      inactiveTintColor={ "#fff" }
      icon={({color, size}) => (
          <MaterialCommunityIcons
          name="exit-to-app" 
          size={size}
          color={color}
          />
      )}
      label="Close"
      onPress={() => {BackHandler.exitApp()}}
      />
    </View>
  );
}; 

const styles = StyleSheet.create({
    header: {
      flexDirection:'row',
      marginLeft: 10, 
      marginVertical: 5
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    }
  });


export default CustomDrawerContent ;
import React from 'react';
import { View, Text, Button, ImageBackground, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const About= ({navigation}) => {
  return (
    <ImageBackground style={styles.container}
      source={{uri: 'https://i.pinimg.com/564x/49/37/8e/49378ea373ae2bc2fdf5bc821d209547.jpg'}} >
      <View style={styles.inside}>
        <Text style={styles.header}>Instructions: </Text>
        <ScrollView>
          <View style={styles.profilecontainer}>
              <Text style={styles.profiletxt}>
              1. Create an app that will showcase the Stack Navigator and Drawer Navigator components. {'\n\n'} 
              2. Create three screens (Home, Profile, and About) then link Home and Profile together in a stack and create a
              separate stack for the About screen. {'\n\n'} 
              3. Each screen should contain a button linking to the next or previous page. {'\n\n'} 
              4. Finally, use the Drawer Navigator to navigate to the Home and About screen. 
              </Text> 
          </View>
        </ScrollView>
      </View>
       <View style={styles.bottom}>
        <TouchableOpacity style={styles.btn}
          onPress={() =>  navigation.goBack()}
        > 
          <Ionicons 
            name="chevron-back-outline" 
            color="#fff"
            size={20}
          />
          <Text style={styles.btntext}>GO BACK</Text>
        </TouchableOpacity> 
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  inside: {
    flex: 1
  },
  header: {
    paddingTop: 20,
    paddingLeft: 30,
    fontFamily: 'Arial',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff'
  },
  bottom: { 
    justifyContent: "center",
    alignItems: 'center',        
    margin: 16,
    flex: 1,
    maxHeight: '6%',
    maxWidth: '100%' 
  },
  btn: {
    backgroundColor: '#8DB',
    borderRadius: 10,
    flex:1,
    flexDirection: 'row',
    maxWidth: '50%', 
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 
  btntext: {
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 'bold', 
    color: '#fff', 
    paddingRight: 5
  },
  profilecontainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#bec',
    borderRadius: 10,
    padding: 10 
  },
  profiletxt: {
    fontSize: 20,
    padding: 5,
    fontFamily: 'Arial',
  }
});

export default About;

import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Home= ({navigation}) => {
  return (
    <ImageBackground style={styles.container}
      source={{uri: 'https://i.pinimg.com/564x/49/37/8e/49378ea373ae2bc2fdf5bc821d209547.jpg'}} >
      <View style={styles.inside}>
        <Text style={styles.header}>Laboratory 4 | 3-3</Text>
        <View>
          <View style={styles.profilecontainer}>
              <Text style={styles.profiletxt}>
                A to-do list application with stack, bottom and drawer navigation.{'\n\n'} 
                1. Click task in bottom navigation to add task in to do list. {'\n\n'} 
                2. Click Profile to view the profiles of the developer.
              </Text> 
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate('Profile')}
        > 
          <Ionicons 
            name="ios-person"
            color="#fff"
            size={20}
          />
          <Text style={styles.btntext}>Profile</Text>
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
    paddingLeft: 20,
    marginTop: 10,
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
    alignItems: 'center',  
    padding: 5
  }, 
  btntext: {
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 'bold', 
    color: '#fff', 
    paddingHorizontal: 5
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

export default Home;

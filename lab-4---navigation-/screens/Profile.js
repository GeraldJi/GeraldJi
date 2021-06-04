import React from 'react';
import { View, Text, Button, ImageBackground, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const Profile= ({navigation}) => {
  return (
    <ImageBackground style={styles.container}
      source={{uri: 'https://i.pinimg.com/564x/49/37/8e/49378ea373ae2bc2fdf5bc821d209547.jpg'}} >
      <View style={styles.inside}>
        <Text style={styles.header}>Profile Screen</Text>
        <ScrollView>
          <View style={styles.profilecontainer}>
            <View> 
              <Avatar.Image source={{ uri: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png'
              }}
              size={50}
          /> 
            </View>
              <Text style={styles.profiletxt}>
                Gerald De Chavez
              </Text> 
              <TouchableOpacity 
                onPress={() => alert('BSCS 3-3 student of CVSU-Main')}>
              <Ionicons style={styles.icon}
                name="ios-arrow-forward"
                color="#31C283"
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.profilecontainer}>
            <View> 
              <Avatar.Image source={{ uri: 'https://i.pinimg.com/474x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f.jpg'
              }}
              size={50}
          /> 
            </View>
              <Text style={styles.profiletxt}>
                Kristel Jane Nuestro
              </Text>
              <TouchableOpacity 
                onPress={() => alert('BSCS 3-3 student of CVSU-Main')}>
              <Ionicons style={styles.icon}
                name="ios-arrow-forward"
                color="#31C283"
                size={20}
              />
            </TouchableOpacity> 
          </View>
          <View style={styles.profilecontainer}>
            <View> 
              <Avatar.Image source={{ uri: 'https://static.toiimg.com/photo/76729750.cms'
              }}
              size={50}
          /> 
            </View>
              <Text style={styles.profiletxt}>
                Joshua Ortiz
              </Text> 
              <TouchableOpacity 
                onPress={() => alert('BSCS 3-3 student of CVSU-Main')}>
              <Ionicons style={styles.icon}
                name="ios-arrow-forward"
                color="#31C283"
                size={20}
              />
            </TouchableOpacity> 
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
    alignItems: 'center'
  }, 
  btntext: {
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 'bold', 
    color: '#fff', 
    paddingRight: 7
  },
  profilecontainer: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#bec',
    borderRadius: 10,
    padding: 10,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profiletxt: {
    fontSize: 20,
    fontFamily: 'Arial',
  }
});

export default Profile;

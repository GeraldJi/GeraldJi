import React from 'react';
import { View, Text, Button, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

const About = ({ navigation }) => {
  return (
    <ImageBackground
      style={globalStyles.container}
      source={{
        uri:
          'https://i.pinimg.com/564x/49/37/8e/49378ea373ae2bc2fdf5bc821d209547.jpg',
      }}>
      <View style={globalStyles.inside}>
        <Text style={globalStyles.header}> Objectives: </Text>
        <ScrollView>
          <View style={globalStyles.profilecontainer}>
            <Text style={globalStyles.profiletxt}>
              1. Learn basic networking in JavaScript; {'\n\n'}
              2. Understand how the Fetch API works; {'\n\n'}
              3. Pass data between screens; and {'\n\n'}
              4. Gain knowledge regarding basics of React Native
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={globalStyles.bottom}>
        <TouchableOpacity
          style={globalStyles.btn}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" color="#fff" size={20} />
          <Text style={globalStyles.btntext}> BACK</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default About;

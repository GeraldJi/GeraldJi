import React from 'react';
import { View, Text, Button, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

const Developer = ({ navigation }) => {
  return (
    <ImageBackground
      style={globalStyles.container}
      source={{
        uri:
          'https://i.pinimg.com/564x/49/37/8e/49378ea373ae2bc2fdf5bc821d209547.jpg',
      }}>
      <View style={globalStyles.inside}>
        <Text style={globalStyles.header}>Developers </Text>
        <ScrollView>
          <View style={globalStyles.developerContainer}>
            <View>
              <Avatar.Image
                source={{
                  uri:
                    'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
                }}
                size={50}
              />
            </View>
            <Text style={globalStyles.profiletxt}>Gerald De Chavez</Text>
            <TouchableOpacity
              onPress={() => alert('BSCS 3-3 student of CVSU-Main')}>
              <Ionicons
                style={globalStyles.icon}
                name="ios-arrow-forward"
                color="#31C283"
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={globalStyles.developerContainer}>
            <View>
              <Avatar.Image
                source={{
                  uri:
                    'https://i.pinimg.com/474x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f.jpg',
                }}
                size={50}
              />
            </View>
            <Text style={globalStyles.profiletxt}>Kristel Jane Nuestro</Text>
            <TouchableOpacity
              onPress={() => alert('BSCS 3-3 student of CVSU-Main')}>
              <Ionicons
                style={globalStyles.icon}
                name="ios-arrow-forward"
                color="#31C283"
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={globalStyles.developerContainer}>
            <View>
              <Avatar.Image
                source={{ uri: 'https://static.toiimg.com/photo/76729750.cms' }}
                size={50}
              />
            </View>
            <Text style={globalStyles.profiletxt}>Joshua Ortiz</Text>
            <TouchableOpacity
              onPress={() => alert('BSCS 3-3 student of CVSU-Main')}>
              <Ionicons
                style={globalStyles.icon}
                name="ios-arrow-forward"
                color="#31C283"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Developer;

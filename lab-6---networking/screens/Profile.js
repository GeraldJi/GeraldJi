import React from 'react';
import { View, Text, Button, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Ionicons, Feather } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

const Profile = ({ route, navigation }) => {
  const data = route.params; 
  return (
    <ImageBackground
      style={globalStyles.container}
      source={{ 
        uri:
          'https://i.pinimg.com/564x/49/37/8e/49378ea373ae2bc2fdf5bc821d209547.jpg'
      }}>
      <View style={globalStyles.inside}>
        <ScrollView>
          <View style={globalStyles.centercontainer}>
            <Image style = {globalStyles.img} 
                  source={{uri: data.picture.large}} /> 
            <Text style={globalStyles.nametxt}>
              {data.name.title} {data.name.first} {data.name.last}
            </Text> 
          </View> 
          <View style={globalStyles.usercontainer}>
            <View style={globalStyles.usericon}>
              <Ionicons name="md-person" color="#8bbeb2" size={18} />
              <Text style={globalStyles.icontxt}>About</Text>
            </View>
            <Text style={globalStyles.usertxt}>Age: {data.dob.age}</Text>
            <Text style={globalStyles.usertxt}>Birthday: {data.dob.date}</Text>
            <Text style={globalStyles.usertxt}>Gender: {data.gender}</Text>
            <Text style={globalStyles.usertxt}>
              Address: {data.location.street.number} {data.location.street.name}, {data.location.city}, {data.location.state}</Text> 

            <View style={globalStyles.usericon}>
              <Ionicons name="ios-mail" color="#8bbeb2" size={18} />
              <Text style={globalStyles.icontxt}>Contact</Text>
            </View>
            <Text style={globalStyles.usertxt}>Email: {data.email}</Text>
            <Text style={globalStyles.usertxt}>Phone: {data.phone}</Text> 
      
            <View style={globalStyles.usericon}>
              <Feather name="more-horizontal" color="#8bbeb2" size={18} />
              <Text style={globalStyles.icontxt}>Others</Text>
            </View>
            <Text style={globalStyles.usertxt}>
              Date Registered: {data.registered.date}{'\n'}
            </Text> 
          </View>  
        </ScrollView>
      </View>
    </ImageBackground>  
  );
};

export default Profile;

import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, Image, ImageBackground, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() { 
    setLoading(true);
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((json) => setData(json.results[0]))
      .catch((error) => console.error(error)) 
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <ImageBackground
      style={globalStyles.container}
      source={{
        uri:
          'https://i.pinimg.com/564x/49/37/8e/49378ea373ae2bc2fdf5bc821d209547.jpg',
      }}>
      <View style={globalStyles.inside}>
        <Text style={globalStyles.header}>Laboratory 6 | 3-3 </Text>
        <View>
          <View style={globalStyles.centercontainer}>
            {isLoading ? ( <ActivityIndicator size="large" color="#fff" /> ) : (
              <>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Profile', data)}> 
                <Image style = {globalStyles.img} 
                  source={{uri: data.picture.large}} /> 
              </TouchableOpacity>   
              <Text>Click the picture for more info</Text>      
              <Text style={globalStyles.nametxt}>
                {data.name.first} {data.name.last} 
              </Text>      
              </>       
            )}     
          </View>  
        </View>   
      </View> 
      <View style={globalStyles.bottom}>
        <TouchableOpacity 
          style={globalStyles.btn}
          onPress={fetchRandomData}   > 
          <Text style={globalStyles.btntext}>GET RANDOM USER</Text> 
        </TouchableOpacity>  
      </View>  
    </ImageBackground>
  );
};

export default Home;

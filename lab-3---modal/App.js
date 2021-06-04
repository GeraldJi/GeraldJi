//BSCS 3-3
//De Chavez, Gerald M. -- Nuestro, Kristel Jane G. -- Ortiz, Joshua R.
import React, {useState} from 'react';
import { Text, View, Button, StyleSheet,Image} from 'react-native';
import Samplemodal from './components/SampleModal';

export default function App(){

  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <View style={styles.container}>
      <Button title = "CLICK ME" onPress = {() => setIsModalOpen(true)} />
      <Samplemodal displayModal = {isModalOpen} closeModal = {() => setIsModalOpen(false)} />
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center'
   }
});

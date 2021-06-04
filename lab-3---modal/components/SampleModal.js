//BSCS 3-3
//De Chavez, Gerald M. -- Nuestro, Kristel Jane G. -- Ortiz, Joshua R.
import React from 'react';
import { Text, View, Button, Modal, ScrollView, Image, StyleSheet } from 'react-native';

const Samplemodal = props => {
  return (
  <View style={styles.container}>
    <Modal visible={props.displayModal} animationType='slide'>
    <ScrollView>
      <View style={styles.imgholder}>
        <Image style={styles.img} source={require('../assets/react.jpg')} />
      </View>
      <View>
        <Text style={styles.header}> One Piece </Text>
      </View>
      <View>
        <Text style={styles.scrolltext}>
One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 98 tankōbon volumes as of February 2021. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as "One Piece" in order to become the next King of the Pirates. {'\n\n'}
The manga spawned a media franchise, having been adapted into a festival film produced by Production I.G, and an anime series produced by Toei Animation, which began broadcasting in Japan in 1999. Additionally, Toei has developed fourteen animated feature films, one original video animation and thirteen television specials. Several companies have developed various types of merchandising and media, such as a trading card game and numerous video games.{'\n\n'} 
The manga series was licensed for an English language release in North America and the United Kingdom by Viz Media and in Australia by Madman Entertainment. The anime series was licensed by 4Kids Entertainment for an English-language release in North America in 2004, before the license was dropped and subsequently acquired by Funimation in 2007. {'\n\n'}
Source: https://en.wikipedia.org/wiki/One_Piece
      </Text>
      </View>
      </ScrollView>
      <View style={styles.btnholder}>
        <Button title="CLOSE" color="red" onPress={props.closeModal} />
      </View>      
    </Modal>
  </View>
  );
};
const styles=StyleSheet.create({
  scrolltext:{
    textAlign:'justify',
    marginHorizontal: 24,
    fontSize: 24
  },
  img:{
    borderRadius: 10,
    width: 200,
    height: 350,
  },
  imgholder:{
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',  
  },
  header: {
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 35,
    fontWeight: 'bold',
  },
  btnholder:{
    marginVertical: 5,
    alignItems:'center'
  }
});
export default Samplemodal;
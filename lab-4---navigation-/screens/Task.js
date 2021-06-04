import React, {useState} from 'react';
import { Text, View, ImageBackground, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function Task() {
  const [items, setItem] = useState();  
  const [addedItem, setAddedItem] = useState([]);  
  const inputGoal = (userInput) => { 
    setItem(userInput); };
  const addGoal = () =>{
    setAddedItem(currentItems => [...currentItems, {id: Math.random().toString(), value: items}]);
    setItem('');
  };
  const goalComplete = (removeList) =>{ 
    setAddedItem((currentItems) => {
    return currentItems.filter((disp) => disp.id!= removeList)
    });
  }
  return (
    <ImageBackground style={styles.container}
      source={{uri: 'https://i.pinimg.com/564x/49/37/8e/49378ea373ae2bc2fdf5bc821d209547.jpg'}} >
      <View>
        <Text style={styles.header}>To-do List</Text>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.inputholder}
        placeholder="Enter Item" multiline
        onChangeText={inputGoal}
        value={items} />
        <View>
        <Button style={styles.btncontainer}
        title='ADD'
        color="#8DB"
        onPress={addGoal} />
        </View>   
      </View>
      <FlatList 
        keyExtractor={(item, index) => item.id} 
        data={addedItem} 
        renderItem={itemData => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => goalComplete(itemData.item.id)}>
          <View style={styles.bulletSqr}></View> 
          <Text style={styles.itemList}> {itemData.item.value} </Text> 
          <View style={styles.right}></View> 
        </TouchableOpacity> 
        )} 
      /> 
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
  header: {
    paddingTop: 40,
    paddingLeft: 30,
    fontFamily: 'Arial',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff'
  },
  inputcontainer: {
    marginVertical: 20,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
    },
  inputholder: {
    paddingHorizontal: 10,  
    paddingTop: 8,
    backgroundColor:'#FFFFFF',
    borderRadius: 18,
    fontSize: 15,
    width: '80%',
    textAlignVertical: 'top',
    alignItems: 'center'
  },
  btncontainer: {
    padding: 10
  },
  itemContainer: {
    marginHorizontal: 30,
    display: 'flex',
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor:'#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    padding: 5
  },
  itemList: {
    flex: 1,
    flexWrap: 'wrap',
    width: '80%',
    marginLeft: 3,
    alignSelf: 'stretch',
    marginRight: 3,
    padding: 5
  },
  bulletSqr: {  
    flexWrap: 'wrap',
    maxWidth: '15%',
    width: 23,
    height: 23,
    borderRadius: 8,
    backgroundColor: '#42CEF5',
    opacity: 0.5,  
  },
  right:{
    padding: 5,
    marginRight: 5,
    flex: 1,
    maxWidth: '5%',
    width: 10,
    height: 2,
    borderRadius: 8,
    borderColor: '#42CEF5',
    borderWidth: 2,
  }
});

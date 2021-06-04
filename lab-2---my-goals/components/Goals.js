import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Goals = props => {
  return (
    <View style={styles.itemContainer}> 
      <TouchableOpacity style={styles.itemInside} onPress={props.goalRemove.bind(this, props.id)}> 
        <View style={styles.bulletSqr}></View>
        <Text style={styles.itemList}>{props.listGoals}</Text>
      </TouchableOpacity>
      <View style={styles.right}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 30,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor:'#FFFFFF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center'
  },
  itemList: {
    flex: 1,
    fontsize: 20,
    maxWidth: '85%',
  },
  itemInside: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  bulletSqr: {  
    width: 23,
    height: 23,
    borderRadius: 8,
    backgroundColor: '#42CEF5',
    opacity: 0.8,
    marginRight: 10,
  },
  right:{
    flex: 1,
    width: 12,
    height: 2,
    borderRadius: 8,
    borderColor: '#42CEF5',
    borderWidth: 2,
  }
});

export default Goals;
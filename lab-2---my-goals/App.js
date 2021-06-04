//BSCS 3-3
//De Chavez, Gerald M. -- Nuestro, Kristel Jane G. -- Ortiz, Joshua R.
import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Inputs from './components/Inputs';
import Goals from './components/Goals';

export default function App() {
  const [addedItem, setAddedItem] = useState([]);
  const addGoal = (itemInput) => {
    setAddedItem((currentItems) => [...currentItems, 
    {id: Math.random().toString(), value: itemInput}
    ]);
  };
  const goalComplete = (goalId) => {
    setAddedItem((currentItems) => {
      return currentItems.filter((goal) => goal.id !== goalId)
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Goals</Text>
      <View>
        <Inputs enterGoal={addGoal} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={addedItem}
        renderItem={(itemData) => <Goals goalRemove={goalComplete.bind(this, itemData.item.id)} listGoals={itemData.item.value} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  title: {
    paddingTop: 40,
    paddingLeft: 30,
    fontFamily: 'Arial',
    fontSize: 35,
    fontWeight: 'bold',
  },
});

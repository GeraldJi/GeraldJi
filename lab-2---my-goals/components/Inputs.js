import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Inputs = props => {
  const [items, setItem] = useState('');
  const inputGoal = (userInput) => {
    setItem(userInput);
  };
   const addGoal = () => {
     props.enterGoal(items);
     setItem();
  };
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.inputholder}
        placeholder="Enter Item"
        multiline
        onChangeText={inputGoal}
        value={items}
      />
      <View style={styles.btnHolder}> 
      <Button title="ADD" onPress={addGoal}  />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    marginVertical: 20,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputholder: {
    padding: 10,  
    backgroundColor:'#FFFFFF',
    borderRadius: 18,
    fontsize: 25,
    width: '80%',
    alignItems: 'center'
  },
  btnHolder: {
    padding: 10
  }
});
export default Inputs;

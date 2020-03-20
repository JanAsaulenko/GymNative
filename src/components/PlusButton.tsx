import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Screens} from '../service/NavigationService';
const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: 'orange',
    position: 'absolute',
    width: 50,
    height: 50,
    right: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

interface IButtonAdd {
  destinationScreen: Screens;
  handlePress: (dest: Screens) => void;
}
export const PlusButton = (props: IButtonAdd) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        props.handlePress(props.destinationScreen);
      }}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

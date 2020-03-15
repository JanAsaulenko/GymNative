import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

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
export const ButtonAdd = props => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        props.navigation.navigate(props.destinationScreen);
      }}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    height: 50,
  },
  text: {
    color: 'red',
  },
});
interface IButtonAdd {
  handleEvent: () => void;
}
export const ButtonAdd = (props: IButtonAdd) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.handleEvent()}>
      <Text style={styles.text}>BUTTON ADD</Text>
    </TouchableOpacity>
  );
};

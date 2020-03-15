import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  humburger: {
    position: 'relative',
    left: 20,
    height: 20,
    width: 20,
    justifyContent: 'space-between',
  },

  hamburger_first: {
    position: 'relative',
    width: 20,
    height: 2,
    backgroundColor: 'black',
  },
  hamburger_second: {
    position: 'relative',
    width: 20,
    height: 2,
    backgroundColor: 'black',
  },
  hamburger_third: {
    position: 'relative',
    width: 20,
    height: 2,
    backgroundColor: 'black',
  },
});

export const Humburger = (props: any) => {
  const handleClick = () => {
    props.open.openDrawer();
  };
  return (
    <TouchableOpacity style={styles.humburger} onPress={() => handleClick()}>
      <Text style={styles.hamburger_first}>sdsd</Text>
      <Text style={styles.hamburger_second}>sdsd</Text>
      <Text style={styles.hamburger_third}>sdsd</Text>
    </TouchableOpacity>
  );
};

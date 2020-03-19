import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {Screens, navigate, ScreensEnum} from '../../service/NavigationService';
const styles = StyleSheet.create({
  main: {
    position: 'relative',
    flex: 1,
    height: 40,
  },
  text: {
    fontSize: 42,
  },
});

export const Note = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Zagolowok</Text>
      <TextInput
        placeholder="add new inform"
        style={{display: 'flex', flexDirection: 'column'}}></TextInput>
      <Text>Zametka</Text>
      <TextInput placeholder="Chack to notes"></TextInput>
      <Text>Data in Time add</Text>
      <TextInput placeholder="now" style={{flexDirection: 'row'}}></TextInput>
      <TextInput placeholder="current time "></TextInput>
    </View>
  );
};

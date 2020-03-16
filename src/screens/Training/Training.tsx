import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Clipboard,
  TextInput,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';
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

type StackParamList = {};
export const Training = (proper: any) => {
  console.log(proper);

  const [value, setValue] = useState(null);
  console.log('dsadawd');

  return (
    <View style={{flex: 1}}>
      <View style={styles.main}></View>
      {value && <Text>{value}</Text>}
    </View>
  );
};

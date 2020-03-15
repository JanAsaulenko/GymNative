import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {styles} from './Vocabulary';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
});
export default props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
    </View>
  );
};

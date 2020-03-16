import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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

export const Training = (proper: any) => {
  const [value, setValue] = useState(null);

  return (
    <View style={{flex: 1}}>
      <View style={styles.main}></View>
      {value && <Text>{value}</Text>}
    </View>
  );
};

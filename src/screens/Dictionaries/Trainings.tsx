import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ButtonAdd} from '../../components/ButtonAdd';

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

export const Trainings = props => {
  return (
    <View style={{flex: 1}}>
      <Text>"sdsd"</Text>
      <View style={styles.main}>
        <ButtonAdd
          handlePress={props.navigation.navigate}
          destinationScreen={'Training'}
        />
      </View>
    </View>
  );
};

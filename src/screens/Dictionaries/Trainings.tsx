import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ButtonAdd} from '../../components/ButtonAdd';
import {ScreensEnum, navigate} from '../../service/NavigationService';
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
          handlePress={navigate}
          destinationScreen={ScreensEnum.Training}
        />
      </View>
    </View>
  );
};
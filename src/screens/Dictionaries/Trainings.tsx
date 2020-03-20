import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PlusButton} from '../../components/PlusButton';
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
        <PlusButton
          handlePress={navigate}
          destinationScreen={ScreensEnum.Training}
        />
      </View>
    </View>
  );
};

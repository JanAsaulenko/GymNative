import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PlusButton} from '../../components/PlusButton';
import {navigate, ScreensEnum} from '../../service/NavigationService';
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

export const Notes = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Photos</Text>

      <View style={styles.main}>
        <PlusButton
          handlePress={navigate}
          destinationScreen={ScreensEnum.Note}
        />
      </View>
    </View>
  );
};
